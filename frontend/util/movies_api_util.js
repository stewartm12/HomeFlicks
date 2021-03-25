export const getMovie = movieId => {
  return $.ajax({
    method: 'GET',
    url: `/api/movies/${movieId}`
  })
}