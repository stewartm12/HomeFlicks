# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  year        :integer          not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Movie < ApplicationRecord
  validates :title, :description, :year, :rating, presence: true

  has_one_attached :trailer
  has_one_attached :thumbnail

  has_one :genre,
  foreign_key: :movie_id,
  class_name: :GenreMovie

  has_one :genre_name,
  through: :genre,
  source: :genre
  
end
