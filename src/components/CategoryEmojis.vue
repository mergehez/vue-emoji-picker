<script setup lang="ts">
import { TCategory } from '../utils/types.ts'
import { useEmojiUI } from '../utils/useEmojiUI.ts'
import { TPickerState, TPickerUtils } from './Picker.vue'
import { ref, watch } from 'vue'

const props = defineProps<{
  category: TCategory,
  index: number,
  pickerUtils: TPickerUtils,
  state: TPickerState
}>()

const aa = useEmojiUI(props.state)
const emojiUIs = ref(props.category.emojis.map(eo => aa.create(eo)))
watch([...aa.toWatch, () => props.category.emojis], () => {
  emojiUIs.value = props.category.emojis.map(eo => aa.create(eo))
})
</script>

<template>
  <section
    :ref="el => state.categoryRefs[props.index] = el as HTMLElement"
    v-if="category.emojis && (category.name === 'Search' || (!state.searchEmojis && category.emojis.length > 0))"
    v-show=" state.infiniteScroll || category == state.activeCategory || state.isSearching"
    :class="{
              'emart-category': true,
              'emart-no-results': !category.emojis.length,
            }"
    :aria-label="(state.mergedI18n.categories as any)[category.id]"
  >
    <div class="emart-category-label">
      <h3 class="emart-category-label">{{ (state.mergedI18n.categories as any)[category.id] }}</h3>
    </div>
    <template v-for="(emojiView, i) in emojiUIs" :key="emojiView.emoji.id">
      <button
        v-if="emojiView.canRender"
        :key="emojiView.emoji.id"
        :aria-label="emojiView.ariaLabel"
        role="option"
        aria-selected="false"
        aria-posinset="1"
        aria-setsize="1812"
        type="button"
        :data-title="emojiView.emoji.short_name"
        :title="emojiView.title"
        class="emart-emoji"
        :class="{
          'emart-emoji-selected': state.previewEmoji?.id === emojiView.emoji.id && state.previewEmojiCategoryId === category.id,
        }"
        @mouseenter="pickerUtils.onEmojiEnter(index, i, emojiView.emoji)"
        @mouseleave="pickerUtils.onEmojiLeave(emojiView.emoji)"
        @click="pickerUtils.onEmojiClick(emojiView.emoji)"
      >
              <span :class="emojiView.cssClass" :style="emojiView.cssStyle">
                {{ emojiView.content }}
              </span>
      </button>
    </template>

    <!--<div v-if="!category.emojis.length">-->
    <!--  <Emoji-->
    <!--    :data="picker.getProp('data')"-->
    <!--    emoji="sleuth_or_spy"-->
    <!--    :native="picker.getProp('native')"-->
    <!--    :skin="picker.getProp('skin')"-->
    <!--    :set="picker.getProp('set')"-->
    <!--  />-->
    <!--  <div class="emart-no-results-label">{{ mergedI18n.notfound }}</div>-->
    <!--</div>-->
  </section>
</template>