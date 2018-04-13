# == Schema Information
#
# Table name: messages
#
#  id                :integer          not null, primary key
#  sender_id         :integer
#  receiver_id       :integer
#  message_thread_id :integer
#  message           :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Message < ApplicationRecord

  belongs_to :messagethread,
    class_name: :Messagethread,
    primary_key: :id,
    foreign_key: :message_thread_id

  belongs_to :sender,
    class_name: :User,
    primary_key: :id,
    foreign_key: :sender_id

  belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :receiver_id

  before_validation :ensure_message_thread

  def ensure_message_thread
    self.message_thread_id||=Messagethread.find_by_users(self.sender_id, self.receiver_id)
  end

end
