class UserMovie < ApplicationRecord
  validates :movie_id, :user_id, presence: true
end
