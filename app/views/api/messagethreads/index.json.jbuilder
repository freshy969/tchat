@messagethreads.each do |messagethread|
  json.set! messagethread.id do
    json.extract! messagethread, :id, :initiator_id, :receiver_id, :created_at
    json.initiator_name messagethread.initiator.screen_name
    json.initiator_pronouns messagethread.initiator.pronouns
    json.initiator_profpic messagethread.initiator.img_url
    json.receiver_name messagethread.receiver.screen_name
    json.receiver_pronouns messagethread.receiver.pronouns
    json.receiver_profpic messagethread.receiver.img_url
    json.last_message messagethread.messages.last.message
    json.last_message_sent messagethread.messages.last.created_at
  end
end
