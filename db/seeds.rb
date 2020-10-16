# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user_1 = User.create!(firstname:"hillary",lastname:"duff",password:"123456", email:"test@user.com", username:"lizzie mcguire")
pin_1 = Pin.create!(description: "mojito recipe")

pin_1.photo.attach(io: File.open("/Users/diego/Desktop/vibes_photos/mojito.jpg"), filename:'mojito.jpg' )