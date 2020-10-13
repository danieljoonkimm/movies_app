import { MOVIES_API } from './API_key.js'

export default {
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_API}&language=en-US&page=1`,
  fetchLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${MOVIES_API}&language=en-US`,
  fetchImages: `https://image.tmdb.org/t/p/w500/`
}