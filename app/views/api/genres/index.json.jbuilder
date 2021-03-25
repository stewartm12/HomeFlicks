@genres.each do |genre|
  json.set! genre.id do
    json.id genre.id
    json.name genre.name
    json.movies do 
      genre.movie_names.each do |movie|
        json.partial! 'api/movies/movie', movie: movie
      end
    end
  end
end