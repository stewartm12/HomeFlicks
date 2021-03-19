class Api::MoviesController < ApplicationController
  def index
    @clips = Movie.all
    render "api/movies/index"
  end
end
