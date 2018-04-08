@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :screen_name, :city, :pronouns, :age, :img_url
  end
end
