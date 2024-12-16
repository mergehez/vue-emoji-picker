<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { TCategory, TPickerProps } from '../utils/types.ts'
import { I18N, SKINS } from '../utils/constants'
import { useStore } from '../utils/useStore.ts'
import { deepMerge, measureScrollbar } from '../utils'
import { useArrowNavigation } from '../utils/useArrowNavigation.ts'
import { TEmojiData } from '../utils/useEmojiData.ts'
import { useRecentEmojis } from '../utils/useRecentEmojis.ts'
import CategoryEmojis from './CategoryEmojis.vue'
import Emoji from './Emoji.vue'
import Anchors from './Anchors.vue'

export type TPickerState = typeof state
export type TPickerUtils = typeof pickerUtils

const query = defineModel('query', {
  type: String,
  default: '',
})
const props = withDefaults(defineProps<TPickerProps>(), {
  perLine: 9,
  maxSearchResults: 75,
  emojiSize: 24,
  title: '',
  emoji: 'grinning',
  color: '#ae65c5',
  set: 'twitter',
  defaultSkin: 1,
  i18n: () => I18N,
  showPreview: true,
  showSearch: true,
  showCategories: true,
  showSkinTones: true,
  infiniteScroll: true,
  pickerStyles: () => ({}),
})

const emit = defineEmits(['select', 'skin-change'])

let categories = ref<TCategory[]>([...props.data.categories].filter(c => c.emojis.length))
categories.value[0].first = true
const store = useStore()

const _onScrollThrottleFn = (scrollTop: number, newActiveCategory: TCategory) => {
  for (let i = 0, l = categories.value.length; i < l; i++) {
    const category = categories.value[i]
    const component = state.categoryRefs[i]
    if (component && component.offsetTop - 50 > scrollTop) {
      break
    }
    newActiveCategory = category
  }
  state.activeCategory = newActiveCategory
}
const onScrollThrottle = (function() {
  let timer: any
  return (scrollTop: number, newActiveCategory: TCategory) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      _onScrollThrottleFn(scrollTop, newActiveCategory)
    }, 20)
  }
})()

const arrowNav = useArrowNavigation({
  pos: { groupIndex: 0, row: 0, col: 0 },
  perLine: props.perLine,
  groups: categories.value.map(c => c.emojis.length).filter(Boolean),
  onChange({ groupIndex, row, col }) {
    state.previewEmojiCategoryIdx = groupIndex
    state.previewEmojiCategoryId = categories.value[groupIndex].id
    state.previewEmoji = categories.value[groupIndex].emojis[row * props.perLine + col]

    setTimeout(() => {
      const scrollEl = state.scrollRef!
      const emojiEl = scrollEl.querySelector(`.emart-emoji-selected`) as HTMLElement
      if (emojiEl) {
        const rect = emojiEl.getBoundingClientRect()
        const scrollRect = scrollEl.getBoundingClientRect()
        if (rect.top < scrollRect.top) {
          scrollEl.scrollTop -= scrollRect.top - rect.top
        } else if (rect.bottom > scrollRect.bottom) {
          scrollEl.scrollTop += rect.bottom - scrollRect.bottom
        }
      }
    }, 50)
  },
})

const recentEmojis = useRecentEmojis()

const state = reactive({
  filteredCategories: categories,
  showSkinTones: props.showSkinTones,
  color: props.color,
  title: props.title,
  set: props.set,
  native: props.native,
  emojiTooltip: props.emojiTooltip,
  infiniteScroll: props.infiniteScroll,
  emojiSize: props.emojiSize,
  fallback: props.fallback,
  waitingForPaint: false,
  previewEmoji: undefined as TEmojiData | undefined,
  firstCategory: categories.value[0],
  activeCategory: categories.value[0],
  searchEmojis: undefined as TEmojiData[] | undefined,
  previewEmojiCategoryIdx: undefined as number | undefined,
  previewEmojiCategoryId: undefined as string | undefined,
  activeSkin: (props.skin || store.get('skin') || props.defaultSkin) as number,
  categoryRefs: [] as HTMLElement[],
  scrollRef: undefined as HTMLElement | undefined,
  mergedI18n: computed(() => deepMerge(I18N, props.i18n)),
  isSearching: false,
  idleEmoji: computed(() => {
    try {
      return props.data.emoji(props.emoji)
    } catch (e) {
      return props.data.firstEmoji()
    }
  }),
})

function usePicker2() {
  const view = {
    reset() {
      categories.value = [...props.data.categories].filter(c => c.emojis.length)
      categories.value[0].first = true
      state.waitingForPaint = false
      state.set = props.set
      state.previewEmoji = undefined
      state.firstCategory = categories.value[0]
      state.activeCategory = state.firstCategory
      state.searchEmojis = undefined
      state.previewEmojiCategoryIdx = undefined
      state.previewEmojiCategoryId = undefined
      state.scrollRef!.scrollTop = 0
      state.activeSkin = props.skin || store.get('skin') || props.defaultSkin
    },
    onScroll() {
      const scrollTop = state.scrollRef!.scrollTop
      let newActiveCategory = categories.value[0]
      if (scrollTop == 0)
        state.activeCategory = newActiveCategory
      else
        onScrollThrottle(scrollTop, newActiveCategory)
    },
    onAnchorClick(category: TCategory) {
      if (state.searchEmojis) {
        return
      }
      const i = categories.value.findIndex(t => t.id === category.id)
      const comp = state.categoryRefs[i]

      if (props.infiniteScroll && comp) {
        state.scrollRef!.scrollTop = category.first ? 0 : comp.offsetTop
      }
      state.activeCategory = categories.value[i]

    },
    onSearch(value?: string) {
      if (!value) {
        state.searchEmojis = undefined
        return
      }
      state.searchEmojis = props.data.search(value, props.maxSearchResults)
      state.previewEmojiCategoryIdx = undefined
      state.previewEmojiCategoryId = undefined
      state.previewEmoji = categories.value[0].emojis[0]
    },
    onEmojiClick(emoji: TEmojiData) {
      emit('select', emoji)
      recentEmojis.add(emoji)
    },
    onEmojiEnter(catIndex: number, emojiIndex: number, emoji: TEmojiData) {
      state.previewEmoji = emoji
      state.previewEmojiCategoryIdx = catIndex
      state.previewEmojiCategoryId = categories.value[catIndex].id
      const perLine = props.perLine
      arrowNav.updatePos({
        groupIndex: state.previewEmojiCategoryIdx,
        col: emojiIndex % perLine || perLine,
        row: Math.floor(emojiIndex / perLine),
      })
    },
    onEmojiLeave(emoji: TEmojiData) {
      setTimeout(() => {
        if (state.previewEmoji === emoji) {
          state.previewEmoji = undefined
        }
      }, 50)
    },
    onArrowLeft: () => arrowNav.left(),
    onArrowRight: () => arrowNav.right(),
    onArrowDown: () => arrowNav.down(),
    onArrowUp: () => arrowNav.up(),
  }
  watch(() => [props.data, props.perLine, props.set, props.maxSearchResults, props.infiniteScroll], () => {
    view.reset()
  })
  watch(query, (nv) => {
    nv = nv || ''
    view.onSearch(nv)
  })

  watch(() => state.searchEmojis, () => {
    if (state.searchEmojis) {
      if (!categories.value.find(c => c.id === 'search'))
        categories.value.unshift({
          id: 'search',
          name: 'Search',
          emojis: state.searchEmojis,
        })
      else
        categories.value[0].emojis = state.searchEmojis
    } else {
      categories.value = categories.value.filter(c => c.id !== 'search')
    }
    state.firstCategory = categories.value[0]
    state.activeCategory = state.firstCategory
  })

  return view
}

function useSearch() {
  onMounted(() => {
    const input = document.querySelector('input')
    if (props.autoFocus && input) {
      input.focus()
    }
  })

  function onEnter() {
    if (state.previewEmoji) {
      pickerUtils.onEmojiClick(state.previewEmoji)
    }
  }

  function onArrowLeft($event: Event) {
    const oldIdx = state.previewEmoji?.id
    pickerUtils.onArrowLeft()
    if ($event && state.previewEmoji?.id !== oldIdx) {
      $event.preventDefault()
    }
  }

  function onArrowUp($event: Event) {
    pickerUtils.onArrowUp()
    $event.preventDefault()
  }

  return {
    onEnter,
    onArrowLeft,
    onArrowRight: pickerUtils.onArrowRight,
    onArrowUp,
    onArrowDown: pickerUtils.onArrowDown,
  }
}

const pickerUtils = usePicker2()
const searchUtils = useSearch()

watch(() => props.skin, (newSkin) => {
  onSkinChange(newSkin!)
})

const onScrollPaint = () => {
  state.waitingForPaint = false
  pickerUtils.onScroll()
}

function onScroll() {
  if (state.infiniteScroll && !state.waitingForPaint) {
    state.waitingForPaint = true
    window.requestAnimationFrame(onScrollPaint)
  }
}

function onSkinChange(skin: number) {
  state.activeSkin = skin
  store.update({ skin })
  emit('skin-change', skin)
}

const refSearchInput = ref()
onMounted(() => {
  if (props.autoFocus) {
    refSearchInput.value?.focus()
  }
})

const skinsOpened = ref(false)
const onClick = (skinTone: number) => {
  if (skinsOpened.value) {
    state.activeSkin = skinTone
  }
  skinsOpened.value = !skinsOpened.value
}
</script>

<template>
  <section class="emart emart-static" :style="{
      width: (perLine * (emojiSize + 12) + 12 + 2 + measureScrollbar()) + 'px',
      ...pickerStyles,
    }">
    <template v-if="showCategories">
      <slot name="tabs" :picker-utils="pickerUtils">
        <Anchors :categories="categories" :state="state" :pickerUtils="pickerUtils" />
      </slot>
    </template>

    <template v-if="showSearch">
      <slot name="search" :searchUtils="searchUtils" :query="query">
        <div class="emart-search">
          <input
            type="text"
            id="emart-search-input"
            ref="refSearchInput"
            :placeholder="state.mergedI18n.search"
            aria-label="Search for an emoji"
            aria-describedby="emart-search-description"
            @keydown.left="searchUtils.onArrowLeft"
            @keydown.right="searchUtils.onArrowRight"
            @keydown.down="searchUtils.onArrowDown"
            @keydown.up="searchUtils.onArrowUp"
            @keydown.enter="searchUtils.onEnter"
            v-model="query"
          />
          <span class="hidden" id="emoji-picker-search-description">
              Use the left, right, up and down arrow keys to navigate the emoji search results.
          </span>
        </div>
      </slot>
    </template>

    <div role="tabpanel" class="emart-scroll" :ref="el => state.scrollRef = el as HTMLElement" @scroll="onScroll">
      <div id="emart-list" ref="scrollContent" role="listbox" aria-expanded="true">
        <template v-for="(category, index) in categories" :key="category.id">
          <slot name="category" :picker-utils="pickerUtils" :category="category" :index="index">
            <CategoryEmojis :category="category" :index="index" :pickerUtils="pickerUtils" :state />
          </slot>
        </template>
      </div>
    </div>

    <slot name="preview" :state="state" :emoji="state.previewEmoji ?? state.idleEmoji" :on-skin-change="onSkinChange">
      <div class="emart-bar emart-bar-preview" v-if="showPreview && state.idleEmoji">
        <!--<Preview2 :emoji="state.previewEmoji" :state="state" :on-skin-change="onSkinChange" />-->
        <div class="emart-p">
          <div class="emart-p-emoji">
            <Emoji :state="state" :emoji="state.previewEmoji ?? state.idleEmoji" :data="data" />
          </div>

          <div class="emart-p-data">
            <span v-if="!state.previewEmoji" class="emart-title-label">{{ title }}</span>

            <!--<template v-else-if="typeof emoji === 'string'">-->
            <!--  <div class="emart-p-name">emoji</div>-->
            <!--</template>-->

            <template v-else>
              <div class="emart-p-name">{{ state.previewEmoji.name }}</div>
              <div class="emart-p-shortnames">
                <span v-for="shortName in state.previewEmoji.short_names" :key="shortName" class="emart-p-shortname">:{{ shortName }}:</span>
              </div>
              <div class="emart-p-emoticons">
                <span v-for="emoticon in state.previewEmoji.emoticons" :key="emoticon" class="emart-p-emoticon">{{ emoticon }}</span>
              </div>
            </template>
          </div>
          <div v-if="showSkinTones" class="emart-p-skins">
            <div :class="{ 'emart-skin-swatches': true, 'emart-skin-swatches-opened': skinsOpened }">
                <span
                  v-for="skinTone in SKINS.length" :key="skinTone"
                  :class="{ 'emart-skin-swatch': true, 'emart-skin-swatch-selected': state.activeSkin == skinTone }"
                >
                  <span :class="'emart-skin emart-skin-tone-' + skinTone" @click="onClick(skinTone)"></span>
                </span>
            </div>
          </div>
        </div>
      </div>
    </slot>
  </section>
</template>