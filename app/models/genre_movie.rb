class GenreMovie < ApplicationRecord
  validates :movie_id, :genre_id, presence: true
end
