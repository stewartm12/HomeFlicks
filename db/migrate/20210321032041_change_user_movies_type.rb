class ChangeUserMoviesType < ActiveRecord::Migration[5.2]
  def change
    change_column :user_movies, :movie_id, :integer, null: true
  end
end
