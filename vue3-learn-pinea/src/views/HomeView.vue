<template>
  <div class="home">
    <div class="count">
      {{ count }}
    </div>
    <div class="buttons">
      <button @click="decreaseCount()">-</button>
      <button @click="increaseCount()">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);

const increaseCount = () => {
  count.value++;
};

const decreaseCount = () => {
  count.value--;
};
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
