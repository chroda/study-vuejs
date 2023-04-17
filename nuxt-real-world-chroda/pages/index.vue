<template>
  <div>
    <h1>Events</h1>

    <EventCard v-for="(event, index) in events" :key="index" :event="event" :data-index="index" />
  </div>
</template>
<script>
import EventCard from '~/components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  computed: mapState({ events: state => state.events.events }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. please try again.'
      })
    }
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
