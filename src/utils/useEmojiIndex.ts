import { ref, watch } from 'vue'
import { buildSearch, uncompress } from './'
import { TCategory, TCategoryId, TCustomEmoji, TData, TDataEmoji, TDataUncompressed, TShortName } from './types.ts'
import { useRecentEmojis } from './useRecentEmojis'
import { TEmojiData, useEmojiData } from './useEmojiData'

export type TEmojiIndexOptions = {
  emojisToShowFilter?: (emoji: TEmojiData) => boolean
  include?: TCategoryId[]
  exclude?: TCategoryId[]
  custom?: TCustomEmoji[]
  recent?: TShortName[]
  recentLength?: number
}

export type TEmojiIndex = {
  emojis: Record<string, TEmojiData>
  emoticons: Record<string, TShortName>
  categories: TCategory[]
  emoji: (emojiId: string) => TEmojiData
  firstEmoji: () => TEmojiData
  hasEmoji: (emojiId: string) => boolean
  nativeEmoji: (unicodeEmoji: string) => TEmojiData | null
  addCustomEmoji: (customEmoji: TCustomEmoji) => TEmojiData
  search: (value: string, maxResults?: number) => TEmojiData[]
  addEmoji: (emojiId: string, data: TDataEmoji) => TEmojiData | undefined
  findEmoji: (emoji: string, skin?: any) => TEmojiData | null
}

export function useEmojiIndex(data: TData, options: TEmojiIndexOptions = {}): TEmojiIndex {
  const _data = uncompress(data) as TDataUncompressed
  const _emojisFilter = options.emojisToShowFilter
  const _emojis = ref<Record<string, TEmojiData>>({})
  const _nativeEmojis = ref<Record<string, TEmojiData>>({})
  const _emoticons = ref<Record<string, TShortName>>({})
  const _categories = ref<TCategory[]>([])
  const _customCategory = ref<TCategory>({ id: 'custom', name: 'Custom', emojis: [] })
  const _emojiValues = ref<TEmojiData[]>([])

  function buildIndex() {
    let { include, exclude, custom, recent, recentLength } = options
    custom = custom || []
    recent = recent || useRecentEmojis().get(recentLength || 20)
    const recentCategory = { id: 'recent', name: 'Recent', emojis: [] } as TCategory
    let allCategories = _data.categories

    if (include) {
      allCategories = allCategories.filter((item) => include.includes(item.id))
      allCategories.sort((a, b) => {
        const indexA = include.indexOf(a.id)
        const indexB = include.indexOf(b.id)
        return indexA - indexB
      })
    }

    function isCategoryNeeded(catId: TCategoryId): boolean {
      const isIncluded = include?.length ? include.includes(catId) : true
      const isExcluded = exclude?.length ? exclude.includes(catId) : false
      return isIncluded && !isExcluded
    }

    // convert category emojis
    const emojiEntries = Object.entries(_data.emojis)
    for (const categoryData of allCategories) {
      if (!isCategoryNeeded(categoryData.id)) continue
      const category: TCategory = {
        id: categoryData.id,
        name: categoryData.name,
        emojis: [],
      }
      const emojiIds = categoryData.emojis.map(idx => emojiEntries.find(e => e[1]._ == idx))
      for (const kv of emojiIds) {
        if (!kv) continue
        const emoji = addEmoji(kv[0], kv[1])
        if (emoji)
          category.emojis.push(emoji)
      }
      if (category.emojis.length)
        _categories.value.push(category)

    }

    if (isCategoryNeeded('custom')) {
      if (custom.length > 0) {
        custom.forEach(addCustomEmoji)
      }
      if (_customCategory.value.emojis.length) {
        _categories.value.push(_customCategory.value)
      }
    }

    if (isCategoryNeeded('recent')) {
      if (recent.length) {
        recent.forEach((id) => {
          const customEmoji = _customCategory.value.emojis.find((emoji) => emoji.id === id)
          if (customEmoji) {
            recentCategory.emojis.push(customEmoji)
          } else if (hasEmoji(id)) {
            recentCategory.emojis.push(emoji(id))
          }
        })
      }
      if (recentCategory.emojis.length) {
        _categories.value.unshift(recentCategory)
      }
    }
  }

  function findEmoji(emoji: string, skin?: any): TEmojiData | null {
    const matches = emoji.match(/^(?::([^:]+):)(?::skin-tone-(\d):)?$/)
    if (matches) {
      emoji = matches[1]
      if (matches[2]) skin = parseInt(matches[2], 10)
    }
    if (_data.aliases.hasOwnProperty(emoji)) {
      emoji = _data.aliases[emoji]
    }
    if (_emojis.value.hasOwnProperty(emoji)) {
      const emojiObject = _emojis.value[emoji]
      return skin ? emojiObject.getSkin(skin) : emojiObject
    }
    if (_nativeEmojis.value.hasOwnProperty(emoji)) {
      return _nativeEmojis.value[emoji]
    }
    return null
  }

  function emoji(emojiId: string) {
    if (_data.aliases.hasOwnProperty(emojiId)) {
      emojiId = _data.aliases[emojiId]
    }
    const emoji = _emojis.value[emojiId]
    if (!emoji) {
      throw new Error('Cannot find emoji by id: ' + emojiId)
    }
    return emoji
  }

  function firstEmoji() {
    const emoji = _emojis.value[Object.keys(_emojis.value)[0]]
    if (!emoji) {
      throw new Error('Cannot get first emoji')
    }
    return emoji
  }

  function hasEmoji(emojiId: string) {
    if (_data.aliases.hasOwnProperty(emojiId)) {
      emojiId = _data.aliases[emojiId]
    }
    return !!_emojis.value[emojiId]
  }

  function nativeEmoji(unicodeEmoji: string) {
    return _nativeEmojis.value[unicodeEmoji] || null
  }

  function addCustomEmoji(customEmoji: TCustomEmoji) {
    const emojiData = { ...customEmoji, id: customEmoji.short_names[0], custom: true }
    if (!emojiData.search) {
      emojiData.search = buildSearch(emojiData)
    }
    const emoji = useEmojiData(emojiData)
    _emojis.value[emoji.id] = emoji
    _customCategory.value.emojis.push(emoji)
    return emoji
  }

  function search(value: string, maxResults?: number) {
    const searchValue = value.toLowerCase()
    const res = _emojiValues.value
      .map((e: TEmojiData) => [e, e._data.search.indexOf(searchValue)] as [TEmojiData, number])
      .filter((e) => e[1] !== -1)

    res.sort((a, b) => a[1] - b[1] == 0 ? a[0].id.localeCompare(b[0].id) : a[1] - b[1])
    return res.map((e) => e[0]).slice(0, maxResults)
  }

  function addEmoji(emojiId: string, data: TDataEmoji): TEmojiData | undefined {
    const emojiData = useEmojiData(data)
    if (!isEmojiNeeded(emojiData)) {
      return undefined
    }
    _emojis.value[emojiId] = emojiData
    if (emojiData.native) {
      _nativeEmojis.value[emojiData.native] = emojiData
    }
    if (emojiData._skins) {
      for (const skin of emojiData._skins) {
        if (skin.native) {
          _nativeEmojis.value[skin.native] = skin
        }
      }
    }
    if (emojiData.emoticons) {
      for (const e of emojiData.emoticons) {
        if (!_emoticons.value[e]) {
          _emoticons.value[e] = emojiData.id
        }
      }
    }
    return emojiData
  }

  function isEmojiNeeded(emoji: TEmojiData): boolean {
    return _emojisFilter ? _emojisFilter(emoji) : true
  }

  buildIndex()

  _emojiValues.value = Object.values(_emojis.value)

  watch(_emojis, () => {
    _emojiValues.value = Object.values(_emojis.value)
  })

  return {
    emojis: _emojis.value,
    emoticons: _emoticons.value,
    categories: _categories.value,
    emoji,
    firstEmoji,
    hasEmoji,
    nativeEmoji,
    addCustomEmoji,
    search,
    addEmoji,
    findEmoji,
  }
}