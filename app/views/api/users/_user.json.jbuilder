json.extract! user, :id, :username, :screen_name, :city, :pronouns, :age, :img_url, :bio, :first_date_idea

json.image_url asset_path(user.img_url)
