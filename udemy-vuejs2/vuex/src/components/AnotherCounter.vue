<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement">Async Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement">Async Decrement</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ])
    }
  }
</script>
