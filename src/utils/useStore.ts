import { ref } from 'vue'

let NAMESPACE = 'emart-vue3'

const isLocalStorageSupported =
  typeof window !== 'undefined' && 'localStorage' in window

type THandler = {
  getter?: (key: string) => any,
  setter?: (key: string, value: any) => void
}

let store: ReturnType<typeof useStore2> | undefined
export const useStore = () => {
  return store ??= useStore2()
}
export const useStore2 = () => {
  const getter = ref<THandler['getter']>()
  const setter = ref<THandler['setter']>()

  function setHandlers(handlers: THandler) {
    handlers || (handlers = {})

    getter.value = handlers.getter
    setter.value = handlers.setter
  }

  function setNamespace(namespace: string) {
    NAMESPACE = namespace
  }

  function update(state: Record<string, any>) {
    for (let key in state) {
      let value = state[key]
      set(key, value)
    }
  }

  function set(key: string, value: any) {
    if (setter.value) {
      setter.value(key, value)
      return
    }
    if (!isLocalStorageSupported)
      return

    try {
      window.localStorage[`${NAMESPACE}.${key}`] = JSON.stringify(value)
    } catch (e) {
    }
  }

  function get(key: string): any {
    if (getter.value)
      return getter.value(key)

    if (!isLocalStorageSupported)
      return undefined

    try {
      const value = window.localStorage[`${NAMESPACE}.${key}`]
      if (value) {
        return JSON.parse(value)
      }
    } catch (e) {
      return undefined
    }
  }

  return {
    setHandlers,
    setNamespace,
    update,
    set,
    get,
  }
}