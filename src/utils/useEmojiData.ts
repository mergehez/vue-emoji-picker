import { TCustomEmoji, TDataEmoji, TEmoji } from './types.ts'
import { ref } from 'vue'
import { unifiedToNative } from './index.ts'
import { SKINS } from './constants'

const SHEET_COLUMNS = 61

export type TEmojiData = {
  _data: Partial<TEmoji> & TDataEmoji;
  _skins?: TEmojiData[];
  name: string;
  colons: string;
  emoticons?: string[];
  custom?: boolean;
  imageUrl?: string;
  unified?: string;
  skin?: number;
  native?: string;
  short_names: string[];
  short_name: string;
  id: string;
  uniqueId: string;
  getSkin: (skin: 'native' | number) => TEmojiData;
  getPosition: () => string;
  ariaLabel: () => string;
};

export function useEmojiData(data: Partial<TCustomEmoji> & TDataEmoji) {
  const _data = ref(Object.assign({}, data))
  const _skins = ref<TEmojiData[] | undefined>(undefined)

  if (_data.value.skin_variations) {
    _skins.value = []
    for (const skinIdx in SKINS) {
      let skinKey = SKINS[skinIdx]
      let variationData = _data.value.skin_variations[skinKey]
      let skinData = Object.assign({}, data)
      Object.assign(skinData, variationData)
      delete skinData.skin_variations
      skinData.skin_tone = parseInt(skinIdx) + 1
      _skins.value.push(useEmojiData(skinData))
    }
  }

  const e = _data.value
  const id = ref(e.id || e.short_names[0])
  const uniqueId = ref(window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16))
  const name = ref(e.name)
  const colons = ref(`:${e.id || e.short_names[0]}:`)
  const emoticons = ref(e.emoticons)
  const custom = ref(e.custom as boolean | undefined)
  const imageUrl = ref(e.imageUrl as string | undefined)
  const unified = ref(e.unified?.toLowerCase())
  const skin = ref(e.skin_tone || (e.skin_variations ? 1 : undefined))
  const native = ref(unifiedToNative(e.unified))
  const short_names = ref(e.short_names)
  const short_name = ref(e.short_names[0])

  function getSkin(skinIdx: any) {
    if (skinIdx && skinIdx != 'native' && _skins.value) {
      return _skins.value[skinIdx - 1]
    }
    return emoji
  }

  function getPosition() {
    let adjustedColumns = SHEET_COLUMNS - 1,
      x = +((100 / adjustedColumns) * e.sheet[0]).toFixed(2),
      y = +((100 / adjustedColumns) * e.sheet[1]).toFixed(2)
    return `${x}% ${y}%`
  }

  function ariaLabel() {
    return [native.value].concat(short_names.value).filter(Boolean).join(', ')
  }

  const emoji = {
    name: name.value,
    colons: colons.value,
    emoticons: emoticons.value,
    custom: custom.value,
    imageUrl: imageUrl.value,
    unified: unified.value,
    skin: skin.value,
    native: native.value,
    short_names: short_names.value,
    short_name: short_name.value,
    id: id.value,
    uniqueId: uniqueId.value,
    _data: _data.value,
    _skins: _skins.value,
    getSkin,
    getPosition,
    ariaLabel,
  } as TEmojiData satisfies TEmojiData

  return emoji
}