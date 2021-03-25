export const saveMovie = (userId, movieId) => {
  const my_list = {user_id: userId, movie_id: movieId}
  return $.ajax({
    method: 'POST',
    url: `/api/my_list`,
    data: {my_list}
  })
}

export const deleteMovie = (userId, movieId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/my_list/`,
    data: {user_id: userId, movie_id: movieId}
  })
}