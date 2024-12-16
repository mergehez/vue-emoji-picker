[![NPM Version](https://img.shields.io/npm/v/%40mergehez%2Fvue-emoji-picker)](https://www.npmjs.com/package/@mergehez/vue-emoji-picker)

# Lightweight Vue Emoji Picker Component

This repository is a fork of [serebrov/emoji-mart-vue](https://github.com/serebrov/emoji-mart-vue) with the following changes:

- complete rewrite in TypeScript
- used Vue 3 `<script setup>` with Composition API and TypeScript
- used composables and objects instead of classes
- used Vite for development
- removed unnecessary dependencies. The single dependency is `vue.
- optimized for bundle size (from [47 KB](https://github.com/serebrov/emoji-mart-vue/blob/a1ea72673a111cce78dc8caad8bc9ea3e02ad5bd/dist/emoji-mart.js) to **33 KB**)
- optimized JSON files (e.g. twitter.json is now **480 KB** instead of [754 KB](https://github.com/serebrov/emoji-mart-vue/blob/1db68aeff40f8df4db791715d3be1361bf3960b7/data/twitter.json))
- included only one emoji set (twemoji), which is the most popular. To reduce the total bundle size. You can easily download other sets from [data](htps://github.com/mergehez/vue-emoji-picker/tree/main/public/data) folder.
- improved keyboard navigation

## Installation

```bash
npm install @mergehez/vue-emoji-picker
```

```bash
bun install @mergehez/vue-emoji-picker
```

## Simple Usage

```vue
<script setup>
  import EmojiPicker, {useEmojiIndex} from '@mergehez/vue-emoji-picker';
  import emojiSet from '@mergehez/vue-emoji-picker/emoji-set.json';
  import '@mergehez/vue-emoji-picker/styles.css';

  const emojiIndex = useEmojiIndex(emojiSet);
  const emoji = ref('😀');
</script>

<template>
  <EmojiPicker v-model="emoji" :data="emojiIndex" />
</template>