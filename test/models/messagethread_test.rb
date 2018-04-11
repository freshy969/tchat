# == Schema Information
#
# Table name: messagethreads
#
#  id           :integer          not null, primary key
#  initiator_id :integer
#  receiver_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class MessagethreadTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
