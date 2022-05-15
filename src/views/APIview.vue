<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5884ea" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,213.3C384,181,480,139,576,106.7C672,75,768,53,864,53.3C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>
  <API/>
  <TelegramComponent/>
  <BottomRief/>
</template>

<script>
// @ is an alias to /src
import API from '@/components/API.vue'
import BottomRief from '@/components/BottomRief.vue'
import TelegramComponent from '@/components/TelegramComponent.vue'

export default {
  name: 'APIview',
  components: {
    API,
    BottomRief,
    TelegramComponent
  }
}
</script>
