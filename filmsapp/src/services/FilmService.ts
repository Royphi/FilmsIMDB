import { ref, Ref } from 'vue'
import Film from '@/interfaces/Film'

class FilmService {
    private film: Ref<Film>
    private films: Ref<Array<Film>>

    constructor () {
      this.film = ref<Film>({})
      this.films = ref<Array<Film>>([])
    }

    getFilm (): Ref<Film> {
      return this.film
    }

    getFilms (): Ref<Array<Film>> {
      return this.films
    }

    async fetchAll (): Promise<void> {
      try {
        const url = 'https://imdb-api.com/en/API/MostPopularMovies/k_k7qs2nng'
        const response = await fetch(url)
        const json = await response.json()
        this.films.value = await json.items
        console.log(json)
        console.log(this.films.value)
      } catch (error) {
        console.log(error)
      }
    }

    async fetchById (id: any): Promise<void> {
      try {
        const url = `https://imdb-api.com/en/API/Title/k_k7qs2nng/${id}`
        const response = await fetch(url)
        const json = await response.json()
        this.film.value = await json.item
        console.log(json)
      } catch (error) {
        console.log(error)
      }
    }
}

export default FilmService
