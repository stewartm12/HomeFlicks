class Api::MoviesController < ApplicationController
  def show
    @movie = Movie.find(params[:id])
    render :show
  end
end
