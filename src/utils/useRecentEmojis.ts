import { ref } from 'vue'
import { TEmojiData } from './useEmojiData.ts'
import { useStore } from './useStore.ts'

const DEFAULTS = [
  '+1',
  'grinning',
  'kissing_heart',
  'heart_eyes',
  'laughing',
  'stuck_out_tongue_winking_eye',
  'sweat_smile',
  'joy',
  'scream',
  'disappointed',
  'unamused',
  'weary',
  'sob',
  'sunglasses',
  'heart',
  'hankey',
] as const

export function useRecentEmojis() {
  const frequently = ref<Record<string, number>>({})
  const initialized = ref(false)
  const defaults = ref<Record<string, number>>({})
  const store = useStore()

  function init() {
    initialized.value = true
    frequently.value = store.get('frequently') || {}
  }

  function add(emoji: TEmojiData) {
    if (!initialized.value) init()
    const { id } = emoji

    frequently.value[id] = (frequently.value[id] || 0) + 1

    store.set('last', id)
    store.set('frequently', frequently.value)
  }

  function get(maxNumber: number): string[] {
    if (!initialized.value) init()
    if (Object.keys(frequently.value).length === 0) {
      const result = []
      const defaultLength = Math.min(maxNumber, DEFAULTS.length)
      for (let i = 0; i < defaultLength; i++) {
        defaults.value[DEFAULTS[i]] = parseInt(((defaultLength - i) / 4).toString(), 10) + 1
        result.push(DEFAULTS[i])
      }
      return result
    }

    const frequentlyKeys = Object.keys(frequently.value)
    frequentlyKeys.sort((a, b) => frequently.value[b] - frequently.value[a])
    const sliced = frequentlyKeys.slice(0, maxNumber)

    const last = store.get('last')
    if (last && !sliced.includes(last)) {
      sliced.pop()
      sliced.push(last)
    }

    return sliced
  }

  return {
    frequently,
    add,
    get,
  }
}