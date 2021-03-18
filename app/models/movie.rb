class Movie < ApplicationRecord
  validates :title, :description, :year, :rating, presence: true

  has_one_attached :movie
end
