# == Schema Information
#
# Table name: user_movies
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserMovie < ApplicationRecord
  validates_uniqueness_of :movie_id, :scope => :user_id

  belongs_to :movie,
  foreign_key: :movie_id,
  class_name: :Movie

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end
