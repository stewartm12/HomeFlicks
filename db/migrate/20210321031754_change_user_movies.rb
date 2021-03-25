class ChangeUserMovies < ActiveRecord::Migration[5.2]
  def change
    change_column :user_movies, :movie_id, :integer
  end
end
