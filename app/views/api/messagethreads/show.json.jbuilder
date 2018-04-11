json.messagethreads do
  json.extract! @messagethread, :id, :initiator_id, :receiver_id, :created_at, :updated_at
  json.message_ids @messagethread.messages.pluck(:id)
end

json.messages do
  @messagethread.messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
