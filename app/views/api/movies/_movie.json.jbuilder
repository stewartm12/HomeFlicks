

json.set! movie.id do
  json.id  movie.id
  json.title  movie.title
  json.description  movie.description
  json.year  movie.year
  json.rating  movie.rating
  json.trailer url_for(movie.trailer)
  json.thumbnail url_for(movie.thumbnail)
end