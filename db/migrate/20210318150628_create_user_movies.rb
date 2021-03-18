class CreateUserMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_movies do |t|
      t.integer :movie_id, null: false
      t.integer :user_id, null: false    
      t.timestamps
    end

    add_index :user_movies, :movie_id
    add_index :user_movies, :user_id
  end
end
