<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({by:50,duration:1500})">Async Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({by:25,duration:1500})">Async Decrement</button>
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
