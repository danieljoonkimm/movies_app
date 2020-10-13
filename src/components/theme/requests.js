import { MOVIES_API } from './API_key.js'

const requests = {
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_API}&language=en-US&page=1`,
  fetchLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${MOVIES_API}&language=en-US`,
  fetchImages: `https://image.tmdb.org/t/p/w500/`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIES_API}&language=en-US&page=1`
}

export default requests;