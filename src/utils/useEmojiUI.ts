import { TEmojiData } from './useEmojiData.ts'
import { TPickerState } from '../components/Picker.vue'

export type TEmojiUI = ReturnType<ReturnType<typeof useEmojiUI2>['create']>
let instance: ReturnType<typeof useEmojiUI2>
export const useEmojiUI = (state: TPickerState) => {
  instance ??= useEmojiUI2(state!)
  return {
    create: instance.create,
    toWatch: [() => state.set, () => state.native, () => state.fallback, () => state.emojiTooltip, () => state.emojiSize, () => state.activeSkin],
  }
}
const useEmojiUI2 = (s: TPickerState) => {
  return {
    create: (e: TEmojiData) => {
      const emoji = e.getSkin(s.activeSkin)

      // if there is no "has" data, we are working with a specific set. e.g. twitter.json
      const hasSet = emoji._data && (emoji._data.has === undefined || emoji._data.has.includes(s.set))
      const getCssStyle = () => {
        let cssStyle = {}
        if (emoji.custom) {
          cssStyle = {
            backgroundImage: 'url(' + emoji.imageUrl + ')',
            backgroundSize: '100%',
            width: s.emojiSize + 'px',
            height: s.emojiSize + 'px',
          }
        } else if (hasSet && !s.native) {
          cssStyle = {
            backgroundPosition: emoji.getPosition(),
          }
        }
        if (s.emojiSize) {
          if (s.native) {
            // Set font-size for native emoji.
            cssStyle = Object.assign(cssStyle, {
              // font-size is used for native emoji which we need
              // to scale with 0.95 factor to have them look approximately
              // the same size as image-based emoji.
              fontSize: Math.round(s.emojiSize * 0.95 * 10) / 10 + 'px',
            })
          } else {
            cssStyle = Object.assign(cssStyle, {
              width: s.emojiSize + 'px',
              height: s.emojiSize + 'px',
            })
          }
        }
        return cssStyle
      }

      const emojiType = emoji.custom ? 'custom' : s.native ? 'native' : hasSet ? 'image' : 'fallback'
      return {
        emoji,
        canRender: !!emoji.custom || s.native || hasSet || !!s.fallback,
        cssClass: ['emoji-set-' + s.set, 'emoji-type-' + emojiType],
        cssStyle: getCssStyle(),
        content: emoji.custom
          ? ''
          : s.native
            ? emoji.native
            : hasSet
              ? ''
              : s.fallback?.(emoji),
        title: s.emojiTooltip ? emoji.short_name : undefined,
        ariaLabel: emoji.ariaLabel(),
      }
    },
  }
}