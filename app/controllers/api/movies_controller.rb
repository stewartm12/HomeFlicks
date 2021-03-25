class Api::MoviesController < ApplicationController
  def show
    @movie = Movie.find(params[:id])
    render "api/movies/show"
  end
end
