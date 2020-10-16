# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user_1 = User.create!(firstname:"hillary",lastname:"duff",password:"123456", email:"test@user.com", username:"lizzie mcguire")
pin_1 = Pin.create!(description: "mojito recipe")
pin_2 = Pin.create!(description: "margarita recipe")
pin_3 = Pin.create!(description: "caip recipe")
pin_4 = Pin.create!(description: "grapefruit recipe")
pin_5 = Pin.create!(description: "bloodymary recipe")
pin_6 = Pin.create!(description: "hummus board")
pin_7 = Pin.create!(description: "limes board")
pin_8 = Pin.create!(description: "Apartment")
pin_9 = Pin.create!(description: "Christmas tree")

pin_1.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/mojito.jpg"), filename:'mojito.jpg' )
pin_2.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/margarita.jpg"), filename:'margarita.jpg' )
pin_3.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/caip.jpg"), filename:'caip.jpg' )
pin_4.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/grapfruitspritz.jpg"), filename:'grapfruitspritz.jpg' )
pin_5.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/bloodmary.jpg"), filename:'bloodmary.jpg' )
pin_6.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/hummus_board.jpg"), filename:'hummus_board.jpg' )
pin_7.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/limes.jpg"), filename:'limes.jpg' )
pin_8.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/apartment.jpg"), filename:'apartment.jpg' )
pin_9.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/christmastree.jpg"), filename:'christmastree.jpg' )