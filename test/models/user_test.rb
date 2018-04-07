# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  screen_name     :string
#  city            :string
#  img_url         :string
#  pronouns        :string
#  age             :integer
#  bio             :text
#  first_date_idea :text
#  my_aesthetic    :string
#  my_anthem       :string
#  hobbies         :string
#  looking_for     :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
