import * as fs from 'node:fs'

const EmojiSet = {
  apple: 1,
  google: 2,
  twitter: 3,
  facebook: 4,
}
const EmojiSetReverse = {
  1: 'apple',
  2: 'google',
  3: 'twitter',
  4: 'facebook',
}

const EmojiSetCompressed = {
  apple: 'd',
  google: 'e',
  twitter: 'f',
  facebook: 'h',
}

export const CompressionMap = {
  // id: '_',
  name: 'a',
  unified: 'b',
  // non_qualified: 'c',
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
  has: 'z',
}
const CompressionMapAll = {
  ...CompressionMap,
  non_qualified: 'c',
}
export const uncompress = (data) => {
  if (!data.compressed) return data

  const uncompressedEmojis = {}

  for (const id in data.emojis) {
    const em = data.emojis[id]
    const uem = {}
    // Faster property mapping
    for (const k in CompressionMap) {
      const compProp = CompressionMap[k]
      if (compProp in em) {
        uem[k] = em[compProp]
      }
    }

    if (em.c) {
      uem.non_qualified = em.c
    }

    if (em.s) {
      uem.subcategory = em.s
    }

    if (em.obsoleted_by) {
      uem.obsoleted_by = em.obsoleted_by
    }
    if (em.obsoletes) {
      uem.obsoletes = em.obsoletes
    }

    if (em.v && Object.keys(em.v).length) {
      uem.skin_variations = {}
      for (const k in em.v) {
        const kk = k
        const v = em.v[kk]
        uem.skin_variations[kk] = {
          unified: v.b,
          non_qualified: v.c,
          added_in: v.o,
          image: v.i,
          sheet: v.k,
          has: v.z?.map((n) => EmojiSetReverse[n]) || [],
        }
        if ('obsoleted_by' in v) {
          uem.skin_variations[kk].obsoleted_by = v.obsoleted_by
        }
        if ('obsoletes' in v) {
          uem.skin_variations[kk].obsoletes = v.obsoletes
        }
      }
    }
    if ('skin_variations' in uem && !Object.keys(uem.skin_variations).length) {
      delete uem.skin_variations
    }

    if (!uem.text) {
      delete uem.text
    }

    uem._ = em._
    // uem.search = buildSearch(uem)
    uncompressedEmojis[id] = uem
  }

  data.compressed = 0
  data.emojis = uncompressedEmojis
  return data
}

function compressObj(original, shortNameIdMap, subcategories, min = false) {
  const obj = structuredClone(original)
  for (const k in obj) {
    for (const compKey in CompressionMap) {
      if (k === compKey) {
        obj[CompressionMap[compKey]] = obj[k]
        delete obj[k]
      }
    }
  }
  if ('subcategory' in obj) {
    obj['s'] = obj['subcategory']
    delete obj['subcategory']
  }

  if ('non_qualified' in obj) {
    if (!min && obj['non_qualified'])
      obj['c'] = obj['non_qualified']
    delete obj['non_qualified']
  }
  if ('sheet_x' in obj) {
    obj['x'] = obj['sheet_x']
    delete obj['sheet_x']
  }
  if ('sheet_y' in obj) {
    obj['y'] = obj['sheet_y']
    delete obj['sheet_y']
  }

  if ('x' in obj) {
    obj[CompressionMap.sheet] = [obj['x'], obj['y']]
    delete obj['x']
    delete obj['y']
  }
  if (min && obj['c']) {
    delete obj['c']
  }
  if (obj.z?.length && obj.z.some(t => typeof t === 'string')) {
    obj.z = obj.z.map(t => EmojiSet[t])
  }

  if (!obj.z?.length) {
    delete obj.z
  }

  return obj
}

function compressData(original, min = false) {
  if (original.compressed)
    return original

  const shortNameIdMap = {}

  const res = structuredClone(original)
  let i = 1
  i = 1
  for (const k in res.emojis) {
    res.emojis[k] = compressObj(res.emojis[k], shortNameIdMap, res.subcategories, min)
    shortNameIdMap['_' + k.toString()] = i++
    res.emojis[k]._ = i

    if (res.emojis[k].v) {
      for (const vkey in res.emojis[k].v) {
        res.emojis[k].v[vkey] = compressObj(res.emojis[k].v[vkey], shortNameIdMap, res.subcategories, min)
      }
    }
  }

  return {
    all: res.all || 0,
    compressed: 1,
    categories: res.categories,
    subcategories: res.subcategories,
    emojis: res.emojis,
    aliases: res.aliases,
  }
}

const sets = ['all', 'apple', 'google', 'twitter', 'facebook']
for (const set of sets) {
  const dataCompressed = JSON.parse(fs.readFileSync(`public/data/${set}.json`, 'utf8'))
  fs.writeFileSync(`public/data/${set}.json`, JSON.stringify(dataCompressed))
  fs.writeFileSync(`public/data/${set}.uncompressed.json`, JSON.stringify(uncompress(dataCompressed)))
  const data = JSON.parse(fs.readFileSync(`public/data/${set}.uncompressed.json`, 'utf8'))
  const dataMin2 = compressData(data, true)
  fs.writeFileSync(`public/data/${set}.min.json`, JSON.stringify(dataMin2))
}
