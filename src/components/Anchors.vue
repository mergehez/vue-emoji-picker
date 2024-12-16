<script setup lang="ts">
import {SVGs} from '../utils/constants.ts'
import { TCategory } from '../utils/types.ts'
import { TPickerState, TPickerUtils } from './Picker.vue'

defineProps<{
  categories: TCategory[],
  state: TPickerState,
  pickerUtils: TPickerUtils
}>()
</script>

<template>
  <div class="emart-bar emart-bar-anchors">
    <!--<Anchors />-->
    <div role="tablist" class="emart-anchors">
      <button
        v-for="category in categories"
        :key="category.id"
        role="tab"
        type="button"
        :aria-label="category.name"
        :aria-selected="category.id == state.activeCategory.id"
        :class="{
        'emart-anchor': true,
        'emart-anchor-selected': category.id == state.activeCategory.id,
      }"
        :disabled="state.searchEmojis && category.id != 'search'"
        :style="{
            color: category.id == state.activeCategory.id ? state.color : '',
            opacity: state.searchEmojis && category.id != 'search' ? 0.5 : 1,
          }"
        :data-title="(state.mergedI18n.categories as any)[category.id]"
        @click="pickerUtils.onAnchorClick(category)"
      >
        <span aria-hidden="true" v-html="(SVGs as any)[category.id]" />
        <span
          aria-hidden="true"
          class="emart-anchor-bar"
          :style="{ backgroundColor: state.color }"
        ></span>
      </button>
    </div>
  </div>
</template>