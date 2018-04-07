json.extract! user, :id, :username, :screen_name, :city, :pronouns, :age, :img_url, :bio, :first_date_idea, :my_anthem, :hobbies, :my_aesthetic, :looking_for

json.image_url asset_path(user.img_url)
