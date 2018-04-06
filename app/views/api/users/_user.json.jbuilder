json.extract! user, :id, :username, :screen_name, :city, :pronouns, :age, :bio, :first_date_idea

json.image_url asset_path(user.img_url)
