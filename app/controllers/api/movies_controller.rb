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
            query_string = query_string.chars.map{|char| char.downcase}.join
            @movies = Movie.with_attached_thumbnail
                .where('LOWER(title) LIKE ?', '%' + query_string + '%')

            if @movies.empty?
                render json: {}
            else 
                render "api/movies/movies"
            end
        end
    end
end
