<template>
  <div class="home">
    <div v-for="film in films" :key="film.id">
      {{film.title}}
      <router-link :to="`/film/${film.id}`">
        Read more
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import FilmService from '../services/FilmService'

export default defineComponent({
  name: 'Home',
  setup () {
    const service = new FilmService()
    const films = service.getFilms()
    console.log(films)
    onMounted(async () => {
      await service.fetchAll()
    })

    return {
      films
    }
  }
})
</script>
