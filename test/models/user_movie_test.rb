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
require 'test_helper'

class UserMovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
