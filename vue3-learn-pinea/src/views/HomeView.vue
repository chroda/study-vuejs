<template>
  <div class="home">
    <div class="count">
      {{ countStore.count }}
    </div>
    <div class="buttons">
      <button @click="countStore.decreaseCount">-</button>
      <button @click="countStore.increaseCount">+</button>
    </div>
    <hr />
    <div>This counter is {{ countStore.oddOrEven }}</div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const countStore = useCounterStore();
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  min-width: 40px;
  font-size: 40px;
  margin: 10px;
}
</style>
