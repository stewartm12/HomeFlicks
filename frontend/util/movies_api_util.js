export const fetchMovie = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/movies'
  })
}