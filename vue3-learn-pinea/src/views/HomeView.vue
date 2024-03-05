<template>
  <div class="home">
    <div class="count">
      {{ count }}
    </div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr />
    <div>This counter is {{ oddOrEven }}</div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const count = ref(0);

const increaseCount = () => {
  count.value++;
};

const decreaseCount = () => {
  count.value--;
};

const oddOrEven = computed(() => {
  return count.value % 2 === 0 ? "even" : "odd";
});
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
