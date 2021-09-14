<template>
   <div class="about">
    <div v-if="!isLoading">
      <p>
        <b>Title:</b>{{film.title}}
      </p>
      <p>
        <b>Type: </b>{{film.type}}
      </p>
      <p>
        <b>Year: </b>{{film.year}}
      </p>
      <p>
        <b>ReleaseDate: </b>{{film.releaseDate}}
      </p>
      <p>
        <b>Directors: </b>{{film.directors}}
      </p>
      <p>
        <b>Writers: </b>{{film.writers}}
      </p>
      <p>
        <b>Stars: </b>{{film.stars}}
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
import CharacterService from '../services/FilmService'
export default defineComponent({
  name: 'About',
  setup () {
    const service = new CharacterService()
    const film = service.getFilm()
    const isLoading = ref<boolean>(true)
    const { id } = useRoute().params
    onMounted(async () => {
      await service.fetchById(id)
      isLoading.value = false
    })
    return {
      film,
      isLoading
    }
  }
})
</script>
