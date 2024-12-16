<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TEmojiData } from '../utils/useEmojiData.ts'
import { TEmojiIndex } from '../utils/useEmojiIndex.ts'
import { TPickerState } from './Picker.vue'
import { useEmojiUI } from '../utils/useEmojiUI.ts'

const props = defineProps<{
  emoji?: TEmojiData,
  emojiId?: string,
  state: TPickerState
  data?: TEmojiIndex,
}>()

const emit = defineEmits(['click', 'mouseenter', 'mouseleave'])

if (props.emojiId && !props.data) {
  throw new Error('Emoji index is required when emojiId is provided')
}
if (!props.emojiId && !props.emoji) {
  throw new Error('Either emoji or emojiId is required')
}

const emojiObject = computed<TEmojiData>(() => {
  if (props.emojiId) {
    return props.data!.findEmoji(props.emojiId)!
  } else {
    return props.emoji!
  }
})

const aa = useEmojiUI(props.state)
const view = ref(aa.create(emojiObject.value))
watch([...aa.toWatch, emojiObject], () => {
  view.value = aa.create(emojiObject.value)
})
</script>

<template>
  <component
    :is="view.canRender ? 'span' : 'div'"
    v-if="view.canRender"
    :title="view.title"
    :aria-label="view.ariaLabel"
    :data-title="view.title"
    class="emart-emoji"
    @click="emit('click', emojiObject)"
    @mouseleave="emit('mouseleave', emojiObject)"
    @mouseenter="emit('mouseenter', emojiObject)"
  >
    <span :class="view.cssClass" :style="view.cssStyle">
      {{ view.content }}
    </span>
  </component>
</template>