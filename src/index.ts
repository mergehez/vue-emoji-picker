import Picker from './components/Picker.vue'
import './style.css'

export * from './components'
export default Picker

export { useEmojiIndex } from './utils/useEmojiIndex'
export type { TEmojiIndex } from './utils/useEmojiIndex'
export { useEmojiData } from './utils/useEmojiData'
export type { TEmojiData } from './utils/useEmojiData'
export { useEmojiUI } from './utils/useEmojiUI'
export type { TEmojiUI } from './utils/useEmojiUI'
export type { TPickerState, TPickerUtils } from './components/Picker.vue'
export type { TI18n, TCategory, TData, TCustomEmoji, TSet, TPickerProps, TFallbackFn } from './utils/types'
