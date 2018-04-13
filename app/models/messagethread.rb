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

class Messagethread < ApplicationRecord

  belongs_to :initiator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :initiator_id

  belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :message_thread_id


  def has_thread?(other)
    user = Messagethread.find_by(initiator_id: self.id, receiver_id: other)
    user ||= Messagethread.find_by(receiver_id: other, initiator_id: self.id)
    return user.nil? true : false
  end

end
