# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :movies, 
  foreign_key: :genre_id,
  class_name: :GenreMovie

  has_many :movie_names,
  through: :movies, 
  source: :movie
end
