import { I18N, SKINS } from './constants'
import { TEmojiData } from './useEmojiData.ts'
import { TEmojiIndex } from './useEmojiIndex.ts'

export type Pretty<T extends object> = {
  [K in keyof T]: T[K]
} & {}

export type TI18n = typeof I18N;
export type TShortName = string
export type TCategoryId = string
export type TSkin = (typeof SKINS)[number]
type TSkinSkin = TSkin | { [K in TSkin]: `${K}-${K}` }[TSkin]
export type TFallbackFn = (emoji: TEmojiData) => string

export const SetMap = {
  1: 'apple',
  2: 'google',
  3: 'twitter',
  4: 'facebook',
} as const
export type TSetNum = keyof typeof SetMap
export type TSet = (typeof SetMap)[TSetNum] | 'all'

export const CompressionMap = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  img_apple: 'd',
  img_google: 'e',
  img_twitter: 'f',
  img_facebook: 'h',
  image: 'i',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o',
  subcategory: 's',
  skin_variations: 'v',
} as const

// compressed emoji from json file
export type TDataEmojiCompressed = {
  _: number, // auto-generated id, it changes every time the data is compressed
  [CompressionMap.name]: string
  [CompressionMap.unified]: string
  // [CompressionMap.non_qualified]?: string
  [CompressionMap.keywords]: string[]
  [CompressionMap.sheet]: number[]
  [CompressionMap.emoticons]?: string[]
  [CompressionMap.text]?: string
  [CompressionMap.short_names]?: string[]
  // [CompressionMap.added_in]: string

  [CompressionMap.subcategory]: number
  [CompressionMap.skin_variations]?: Partial<Record<TSkinSkin, TSkinVariationCompressed>>

  z?: number[] // has_image
}

// uncompressed emoji from json file
export type TDataEmoji = {
  _: number, // auto-generated id, it changes every time the data is compressed
  id: string,
  subcategory: number
  name: string
  unified: string
  // non_qualified?: string | null
  keywords: string[]
  emoticons?: string[]
  text: string
  short_names: string[]
  // added_in: string

  sheet: number[]
  // sheet_x: number
  // sheet_y: number
  search: string // comma-separated list of keywords
  skin_variations?: Partial<Record<TSkinSkin, TSkinVariation>>
  skin_tone?: number // TODO

  has?: TSet[]
}
export type TEmoji = TDataEmoji & {
  colons: string
  native: string
  short_name: TShortName
  skin?: number
}
export type TCustomEmoji = TEmoji & {
  search?: string
  custom: boolean
  imageUrl?: any
}

export type TSkinVariation = {
  added_in: string
  image: string
  // non_qualified: string
  sheet: number[]
  unified: string
  has?: TSet[]
}
export type TSkinVariationCompressed = {
  [CompressionMap.unified]: string // unified
  [CompressionMap.added_in]: string // added_in
  [CompressionMap.image]: string // image
  // [CompressionMap.non_qualified]?: string // non_qualified
  [CompressionMap.sheet]: number[] // sheet
  z?: number[] // has_image
}

export type TCategory = {
  id: TCategoryId
  name: string
  emojis: TEmojiData[] // TODO
  first?: boolean // this is used in picker.ts
}

// data from json file
export type TDataShared = {
  all?: any
  aliases: Record<string, string>
  categories: {
    id: TCategoryId
    name: string
    emojis: number[] // emoji "id"s
    // emojis: TEmoji[] // TODO
  }[]
  subcategories: Record<string, number> // name -> id
}
export type TDataCompressed = TDataShared & {
  compressed: number;
  emojis: Record<TShortName, TDataEmojiCompressed>
}
export type TDataUncompressed = TDataShared & {
  compressed: 0;
  emojis: Record<TShortName, TDataEmoji>
}
export type TData = TDataCompressed | TDataUncompressed

export type TPickerProps = {
  perLine?: number
  maxSearchResults?: number
  emojiSize?: number
  title?: string
  emoji?: string
  color?: string
  set?: TSet
  skin?: number | null
  defaultSkin?: number
  native?: boolean
  emojiTooltip?: boolean
  autoFocus?: boolean
  i18n?: TI18n
  showPreview?: boolean
  showSearch?: boolean
  showCategories?: boolean
  showSkinTones?: boolean
  infiniteScroll?: boolean
  pickerStyles?: Record<string, any>
  data: TEmojiIndex
  fallback?: TFallbackFn
}