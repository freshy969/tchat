# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.create(username: "Demo", password: "password", screen_name: "goth gf", city: "Bay Area", img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523404655/profpics/uegjfdcqliax0bmnahgs.jpg", pronouns: "she/her/hers", age: 22,
  bio: "Just a young girl dreaming of a happily ever after. be my prince charming :)", first_date_idea: "Take me somewhere nice that we can chat", my_anthem: "Cascada - Everytime We Touch is the greatest tune ever ahhhh",
  hobbies: "a full part time student and a full time life liver", my_aesthetic: "Smol Goth GF too cute to hate but annoying as all hell",
  looking_for: "love" )

cities = ["Bay Area", "NY", "LA", "DC", "Miami"]

cities.each do |city|

  User.create(username: city + "1", password: "password", screen_name: Faker::AquaTeenHungerForce.character, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523407051/20766775_110930696257299_1250066457887244288_n.jpg", pronouns: "he/him/his", age: 19,
    bio: "2 months on T on here trying to find a pal to navigate this dreary existence with", first_date_idea: "lets go to the beach!", my_anthem: "Mykki Blanco - Wavvy",
    hobbies: "dissapointing my parents, flipping off churches", my_aesthetic: "The manliest 5 foot 3 110 individual you have ever seen",
    looking_for: "Let me be your prince charming" )

  User.create(username: city + "2", password: "password", screen_name: Faker::Beer.style, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523406815/prof-pic2.png", pronouns: "they/them", age: 35,
    bio: "Just a washed up oldie trying to find the special somebody.", first_date_idea: "Board game night!!!!", my_anthem: "Kim Petras is my fave",
    hobbies: "video games, watching tv, trying my best", my_aesthetic: "i like to keep the fans guessing",
    looking_for: "a best friend" )

  User.create(username: city + "3", password: "password", screen_name: Faker::DragonBall.character, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523406836/prof-pic1.png", pronouns: "she/her", age: 16,
    bio: "Im in need of some serious help pls my parents just kicked me out and I dont know what to do", first_date_idea: "Help me get a roof over my head", my_anthem: "Anything by SOPHIE makes me cry",
    hobbies: "I enjoy things sometimes", my_aesthetic: "Fun but sad",
    looking_for: "help" )

  User.create(username: city + "4", password: "password", screen_name: Faker::HitchhikersGuideToTheGalaxy.planet, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523407065/20394099_242132076308120_7703107597238272000_n.jpg", pronouns: "she/her/princess", age: 27,
    bio: "Looking to have a great time!!", first_date_idea: "Lets hit the club", my_anthem: "TECHNO TECHNO TECHNO",
    hobbies: "dancing, drinking, dressing up nice", my_aesthetic: "Ur friends hot older sister",
    looking_for: "a party partner" )

  User.create(username: city + "5", password: "password", screen_name: Faker::RickAndMorty.character, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523407037/21479703_2041816742707024_8159332853214085120_n.jpg", pronouns: "she/her/hers", age: 26,
    bio: "Starting coming out recently to friends and family really been finding myself this past year", first_date_idea: "lets go for a hike!", my_anthem: "QT - Hey QT",
    hobbies: "outdoors stuff", my_aesthetic: "lowkey",
    looking_for: "community, maybe love" )

  User.create(username: city + "6", password: "password", screen_name: Faker::TheFreshPrinceOfBelAir.character, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523407044/21224641_1968737290008046_3976370178215641088_n.jpg", pronouns: "they/them", age: 40,
    bio: "Constantly improving and exploring myself", first_date_idea: "fancy dinner for two", my_anthem: "Lizzo - Phone",
    hobbies: "Just doing me the best I can", my_aesthetic: "Old but young at heart",
    looking_for: "Somebody to explore life more with" )

  User.create(username: city + "7", password: "password", screen_name: Faker::VentureBros.character, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523407119/13774346_312769012392564_339009418_n.jpg", pronouns: "she/her", age: 28,
    bio: "Looking to get involved in entertainment want some friends to work on scripts and audition practice with", first_date_idea: "Line reading", my_anthem: "Anything but country",
    hobbies: "acting, singing, dancing, performing", my_aesthetic: "agile and fragile",
    looking_for: "the love of my life" )

  User.create(username: city + "8", password: "password", screen_name: Faker::RuPaul.queen, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523400308/profpics/zy16kezi5ytjafid4mcb.png", pronouns: "him/they", age: 32,
    bio: "Lifelong traveler and journeyman. Have recently come to terms with my nb identity.", first_date_idea: "Picnic in the park", my_anthem: "John Lennon - Imagine",
    hobbies: "Outdoors stuff", my_aesthetic: "mild to wild",
    looking_for: "an educator" )

  User.create(username: city + "9", password: "password", screen_name: Faker::Name.first_name, city: city, img_url: "http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523407028/26863671_157985988324351_1392497030940590080_n.jpg", pronouns: "she/him/they", age: 27,
    bio: "In Miami for the weekend looking for some qt's to party with!!!", first_date_idea: "ayyyyy lets party yo", my_anthem: "Soft Rock",
    hobbies: "I love thrifting", my_aesthetic: "Trashy",
    looking_for: "A fun weekend" )
end

Messagethread.create(initiator_id: 1, receiver_id: 2)
Message.create(sender_id: 1, receiver_id: 2, message_thread_id: 1, message: "hey what's up")
Message.create(sender_id: 2, receiver_id: 1, message_thread_id: 1, message: "not much u?")
Message.create(sender_id: 1, receiver_id: 2, message_thread_id: 1, message: "ugh so much life sucks")
Message.create(sender_id: 1, receiver_id: 2, message_thread_id: 1, message: "I wish I was with you rn")

Messagethread.create(initiator_id: 1, receiver_id: 3)
Message.create(sender_id: 1, receiver_id: 3, message_thread_id: 2, message: "lets hang")
Message.create(sender_id: 3, receiver_id: 1, message_thread_id: 2, message: "ooooh what should we do")
Message.create(sender_id: 3, receiver_id: 1, message_thread_id: 2, message: "should we go for dinner")
Message.create(sender_id: 3, receiver_id: 1, message_thread_id: 2, message: "or hang immediately cutie")

Messagethread.create(initiator_id: 4, receiver_id: 1)
Message.create(sender_id: 4, receiver_id: 1, message_thread_id: 3, message: "ughhhh")
Message.create(sender_id: 1, receiver_id: 4, message_thread_id: 3, message: "what?")
Message.create(sender_id: 4, receiver_id: 1, message_thread_id: 3, message: "oh nothing I just want to tell you something and I don't think I have the confidence to")
Message.create(sender_id: 1, receiver_id: 4, message_thread_id: 3, message: "just tell me!!!!")

Messagethread.create(initiator_id: 5, receiver_id: 1)
Message.create(sender_id: 5, receiver_id: 1, message_thread_id: 4, message: "ughhhh")
Message.create(sender_id: 5, receiver_id: 1, message_thread_id: 4, message: "what?")
Message.create(sender_id: 5, receiver_id: 1, message_thread_id: 4, message: "oh nothing I just want to tell you something and I don't think I have the confidence to")
Message.create(sender_id: 5, receiver_id: 1, message_thread_id: 4, message: "just tell me!!!!")
