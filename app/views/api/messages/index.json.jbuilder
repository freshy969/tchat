@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :sender_id, :receiver_id, :message_thread_id, :message
  end
end
