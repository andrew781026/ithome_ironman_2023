<template>
  <div>
    <input type="text" v-model="text">
    {{text}}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('VueInput')
</script>

<style scoped>
input{
  border-radius: 2rem;
  border: 1px solid greenyellow;
  padding: 1rem;
  margin-right: 1rem;
}
</style>
