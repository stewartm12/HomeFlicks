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
  validates :movie_id, :user_id, presence: true
end
