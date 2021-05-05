json.searched_videos do
    @movies.each { |movie|
        json.partial! 'api/movies/movie', movie: movie
    }
end