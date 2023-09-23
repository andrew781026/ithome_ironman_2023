<template>
  <div class="counter">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
</template>

<script>
import { useStore } from '@nanostores/vue';
import { storeCounter } from '../store/counter.js';

export default {
  setup() {
    const $counter = useStore(storeCounter);
    const add = () => storeCounter.set($counter+1)
    const subtract = () => storeCounter.set($counter-1)

    return {
      count:$counter,
      add,
      subtract,
    };
  },
};
</script>

<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
  background-color: greenyellow ;
}
</style>
