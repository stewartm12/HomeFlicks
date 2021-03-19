# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Genre
# Romance = Genre.create!(name: 'Romance')
# Adventure = Genre.create!(name: 'Adventure')
# Comedy = Genre.create!(name: 'Comedy')
# Anime = Genre.create!(name: 'Anime')

User.destroy_all
user1 = User.create!(email: 'email2', password: 'password2')