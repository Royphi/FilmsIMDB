<template>
   <div class="about">
    <div v-if="!isLoading">
      <h3>aqui
        {{film.title}}
      </h3>
      <p>
        <b>Rank: </b>{{film.rank}}
      </p>
      <p>
        <b>rankUpDown: </b>{{film.rankUpDown}}
      </p>
      <p>
        <b>Fulltitle: </b>{{film.Fulltitle}}
      </p>
      <p>
        <b>Year: </b>{{film.Year}}
      </p>
      <p>
        <b>crew: </b>{{film.crew}}
      </p>
      <p>
        <router-link to="/">
          Return
        </router-link>
      </p>
    </div>
    <div v-else>
      Is Loading
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import FilmService from '../services/FilmService'

export default defineComponent({
  name: 'About',
  setup () {
    const service = new FilmService()
    const film = service.getFilm()
    console.log(film)
    const isLoading = ref<boolean>(true)
    const { id } = useRoute().params

    onMounted(async () => {
      await service.fetchById(id)
    })

    return (
      isLoading
    )
  }
})
</script>
