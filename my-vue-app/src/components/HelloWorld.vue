<template>
  <h1>{{ msg }}</h1>
  <h2>{{ state.title }}</h2>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})
console.log(import.meta.env);
const state = reactive({ count: 0, title: import.meta.env.VITE_TITLE });
const map = new Map();
map.set('key', 'value');
console.log(map);
</script>

<style scoped>
a {
  color: #42b983;
}
</style>