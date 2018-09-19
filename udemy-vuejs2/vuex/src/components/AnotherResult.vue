<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{ clicks }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        counter: 'doubleCounter',
        clicks: 'stringCounter'
      })
    }
  }
</script>
