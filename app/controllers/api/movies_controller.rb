class Api::MoviesController < ApplicationController
  def show
    @movie = Movie.find(params[:id])
    render "api/movies/show"
  end

  def search
        query_string = params[:query_string]
        
        if query_string.length == 0 
            render json: {}
        else 
            @movies = Movie.with_attached_thumbnail
                .where('title LIKE ?', '%' + query_string + '%')

            if @movies.empty?
                render json: {}
            else 
                render "api/movies/movies"
            end
        end
    end
end
