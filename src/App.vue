<script setup lang="ts">
import Picker from './components/Picker.vue'
import { TSet } from './utils/types.ts'
import { TEmojiData } from './utils/useEmojiData.ts'
import { TEmojiIndex, useEmojiIndex } from './utils/useEmojiIndex.ts'
import { ref } from 'vue'
import dataFb from '../public/data/facebook.json'
import data from '../public/data/twitter.json'

const emojiIndexTw = useEmojiIndex(data)
const emojiIndexFb = useEmojiIndex(dataFb)

const selections = ref('')

function onSelect(e: TEmojiData) {
  selections.value += e.native + ' ' + e.colons + ' '
}

const emojiIndex = ref<TEmojiIndex>(emojiIndexTw)
const set = ref<TSet>('twitter')
const color = ref<string>()

function changeIndex() {
  emojiIndex.value = emojiIndexFb
  set.value = 'facebook'
}

function findFire() {
  console.log(emojiIndex.value.search('fire'))
}

const query = ref('')

window.document.body.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.metaKey && e.key === 'k') {
    changeIndex()
  }
})
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center p-24">

    <div class="text-center">{{ selections }}</div>
    <Picker ref="refPicker" native :data="emojiIndex as any" :query="query" :set="set" title="" @select="onSelect" :color="color" />
    <button @click="changeIndex">Change Index</button>
    <button @click="query = 'smiley'">set search</button>
    <button @click="color = 'red'">set color</button>
    <button @click="findFire">find fire</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
