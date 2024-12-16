import { CompressionMap, SetMap, TData, TDataEmoji, TDataEmojiCompressed, TSetNum, TSkin } from './types.ts'

export function unifiedToNative(unified: string) {
  const codePoints = unified.split('-').map((u) => `0x${u}`)
  return String.fromCodePoint(...codePoints.map((u) => Number(u)))
}

export function deepMerge<T1 extends Record<string, any>, T2 extends Partial<T1>>(a: T1, b: T2) {
  const o = {} as T1

  for (let key in a) {
    const originalValue = a[key]
    let value = originalValue

    if (key in b) {
      value = b[key]!
    }

    if (typeof value === 'object') {
      value = deepMerge(originalValue, value)
    }

    o[key] = value
  }

  return o
}

// https://github.com/sonicdoe/measure-scrollbar
export function measureScrollbar() {
  if (typeof document == 'undefined') return 0
  const div = document.createElement('div')

  div.style.width = '100px'
  div.style.height = '100px'
  div.style.overflow = 'scroll'
  div.style.position = 'absolute'
  div.style.top = '-9999px'

  document.body.appendChild(div)
  const scrollbarWidth = div.offsetWidth - div.clientWidth
  document.body.removeChild(div)

  return scrollbarWidth
}


export const buildSearch = (emoji: TDataEmoji) => {
  const search = new Set<string>()
  let res = ''

  const addToSearch = (strings: undefined | string[], split: boolean) => {
    strings?.forEach((string) => {
      (split ? string.split(/\s+/) : [string]).forEach((s) => {
        s = s.toLowerCase()

        if (!search.has(s)) {
          search.add(s)
          res += s + ','
        }
      })
    })
  }

  addToSearch(emoji.short_names, true)
  addToSearch([emoji.name], true)
  addToSearch(emoji.keywords, false)
  addToSearch(emoji.emoticons, false)

  return res
}

export const uncompress = (data: TData) => {
  if (!data.compressed) return data

  const uncompressedEmojis: Record<string, TDataEmoji> = {}

  for (const id in data.emojis) {
    const em = data.emojis[id] as TDataEmojiCompressed
    const uem = {} as TDataEmoji
    uem._ = em._
    for (const k in CompressionMap) {
      const compProp = CompressionMap[k as keyof typeof CompressionMap]
      if (compProp in em) {
        (uem as any)[k] = (em as any)[compProp]
      }
    }

    uem.short_names = [id, ...(uem.short_names || [])]
    uem.text ??= ''

    uem.skin_variations = {}
    for (const k in em.v) {
      const kk = k as TSkin
      const v = em.v[kk]!
      uem.skin_variations[kk] = {
        unified: v.b,
        added_in: v.o,
        image: v.i,
        sheet: v.k,
        has: v.z?.map((n) => SetMap[n as TSetNum]) || [],
      }
    }

    uem.search = buildSearch(uem)
    uncompressedEmojis[id] = uem
  }

  data.compressed = 0
  data.emojis = uncompressedEmojis
  return data
}