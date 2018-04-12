@messagethreads.each do |messagethread|
  json.set! messagethread.id do
    json.extract! messagethread, :id, :initiator_id, :receiver_id, :created_at
    json.last_message messagethread.messages.last.message
  end
end
