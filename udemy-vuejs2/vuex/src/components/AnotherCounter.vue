<template>
  <div>
    <button class="btn btn-primary" @click="increment(2)">Async Increment</button>
    <button class="btn btn-primary" @click="decrement(5)">Async Decrement</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions([
        'increment',
        'decrement',
        'asyncIncrement',
        'asyncDecrement'
      ])
    }
  }
</script>
