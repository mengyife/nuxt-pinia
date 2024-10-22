<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()
const { count, increment, decrement } = store
</script>
