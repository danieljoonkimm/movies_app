import { MOVIES_API } from './API_key.js'

const requests = {
  fetchPopular: `/3/movie/popular?api_key=${MOVIES_API}&language=en-US&page=1`,
  fetchLatest: `/3/movie/latest?api_key=${MOVIES_API}&language=en-US`,
  fetchImages: `/t/p/w500/`,
  fetchTopRated: `/3/movie/top_rated?api_key=${MOVIES_API}&language=en-US&page=1`,
  fetchUpcoming: `/3/movie/upcoming?api_key=1d37dcee0142b2381a051935edea24dd&language=en-US&page=1`
}

export default requests;