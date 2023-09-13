<template>
  <div>
    <input type="text" v-model="text">
    {{text}}
    <br>
    {{counting}}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {storeCount} from '../store/store.js'
import { useStore } from '@nanostores/vue';

const counting = useStore(storeCount)

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
