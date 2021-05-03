# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

GenreMovie.destroy_all
Genre.destroy_all
Movie.destroy_all
User.destroy_all

require 'open-uri'

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('movies')
ApplicationRecord.connection.reset_pk_sequence!('genre_movies')
ApplicationRecord.connection.reset_pk_sequence!('user_movies')
ApplicationRecord.connection.reset_pk_sequence!('genres')

romance = Genre.create!(name: 'Romance')
scifi_and_fantasy = Genre.create!(name: 'Sci-fi & Fantasy')
comedy = Genre.create!(name: 'Comedy')
anime = Genre.create!(name: 'Anime')

user1 = User.create!(email: 'email2', password: 'password2')

# Romance
fiftyShades = Movie.create!(
  title: 'Fifty Shades of Grey', 
  description: 'When college senior Anastasia Steele (Dakota Johnson) steps in for her sick roommate to interview prominent businessman Christian Grey (Jamie Dornan) for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him.',
  year: 2015,
  rating: 'R'
  )

file1 = URI.open('https://homeflicks-seed.s3.amazonaws.com/fifty_shades_of_grey.mp4')
fiftyShades.trailer.attach(io: file1, filename: 'fifty_shades_of_grey.mp4')
image1 = URI.open("https://homeflicks-seed.s3.amazonaws.com/shade_img.png")
fiftyShades.thumbnail.attach(io: image1, filename: "shade_img.png")

ps_i_love_you = Movie.create!(
  title: 'PS I Love You', 
  description: 'When Gerry (Gerard Butler), the husband of Holly Kennedy (Hilary Swank), dies from an illness, she loses the love of her life. Knowing how hard Holly will take his death, Gerry plans ahead. Beginning on her 30th birthday, she receives the first in a series of letters written by him, designed to ease her grief and encourage her to move forward to a new life.',
  year: 2007,
  rating: 'PG-13'
  )
  file2 = URI.open('https://homeflicks-seed.s3.amazonaws.com/ps_i_love_you.mp4')
  ps_i_love_you.trailer.attach(io: file2, filename: 'ps_i_love_you.mp4')
  image2 = URI.open("https://homeflicks-seed.s3.amazonaws.com/ps_img.jpeg")
  ps_i_love_you.thumbnail.attach(io: image2, filename: "shade_img.png")


twilight = Movie.create!(
  title: 'Twilight', 
  description: "High-school student Bella Swan (Kristen Stewart), always a bit of a misfit, doesn't expect life to change much when she moves from sunny Arizona to rainy Washington state. Then she meets Edward Cullen (Robert Pattinson), a handsome but mysterious teen whose eyes seem to peer directly into her soul.",
  year: 2008,
  rating: 'PG-13'
  )

file5 = URI.open('https://homeflicks-seed.s3.amazonaws.com/twilight_1.mp4')
twilight.trailer.attach(io: file5, filename: 'twilight_1.mp4')
image3 = URI.open("https://homeflicks-seed.s3.amazonaws.com/twilight_img.jpeg")
  twilight.thumbnail.attach(io: image3, filename: "twilight_img.jpeg")

west_side_story = Movie.create!(
  title: 'West Side Story', 
  description: "A musical in which a modern day Romeo and Juliet are involved in New York street gangs. On the harsh streets of the upper west side, two gangs battle for control of the turf. The situation becomes complicated when a gang members falls in love with a rival's sister.",
  year: 1961,
  rating: 'G'
  )

file6 = URI.open('https://homeflicks-seed.s3.amazonaws.com/west_side_story.mp4')
west_side_story.trailer.attach(io: file6, filename: 'west_side_story.mp4')
image4 = URI.open("https://homeflicks-seed.s3.amazonaws.com/west_img.jpeg")
  west_side_story.thumbnail.attach(io: image4, filename: "west_img.jpeg")
# Comedy



spiderman_far_from_home = Movie.create!(
  title: "Spider-Man: Far from Home", 
  description: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe.",
  year: 2019,
  rating: 'PG-13'
  )

file9 = URI.open('https://homeflicks-seed.s3.amazonaws.com/spiderman.mp4')
spiderman_far_from_home.trailer.attach(io: file9, filename: 'spiderman.mp4')
image5 = URI.open("https://homeflicks-seed.s3.amazonaws.com/spiderman_img.jpeg")
  spiderman_far_from_home.thumbnail.attach(io: image5, filename: "spiderman_img.jpeg")

good_boys = Movie.create!(
  title: "Good Boys", 
  description: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Furyshows up in his hotel room to recruit him for a mission. The world is in danger as four massiveelemental creatures -- each representing Earth, air, water and fire -- emerge from a hole tornin the universe.",
  year: 2019,
  rating: 'PG-13'
  )

  file10 = URI.open('https://homeflicks-seed.s3.amazonaws.com/good_kids.mp4')
  good_boys.trailer.attach(io: file10, filename: 'good_kids.mp4')
  image6 = URI.open("https://homeflicks-seed.s3.amazonaws.com/good_kids_img.png")
  good_boys.thumbnail.attach(io: image6, filename: "good_kids_img.png")

home_alone = Movie.create!(
  title: "Home Alone", 
  description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
  year: 1990,
  rating: 'PG'
  )

  file11 = URI.open('https://homeflicks-seed.s3.amazonaws.com/home_alone.mp4')
  home_alone.trailer.attach(io: file11, filename: 'home_alone.mp4')
  image7 = URI.open("https://homeflicks-seed.s3.amazonaws.com/home_alone_img.jpeg")
  home_alone.thumbnail.attach(io: image7, filename: "home_alone_img.jpeg")

ghost_busters = Movie.create!(
  title: "Ghostbusters", 
  description: "After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become 'ghostbusters' to wage a high-tech battle with the supernatural for money.",
  year: 1984,
  rating: 'PG'
  )

  file12 = URI.open('https://homeflicks-seed.s3.amazonaws.com/ghost_busters.m4v')
  ghost_busters.trailer.attach(io: file12, filename: 'ghost_busters.m4v')
  image8 = URI.open("https://homeflicks-seed.s3.amazonaws.com/ghost_busters_img.png")
  ghost_busters.thumbnail.attach(io: image8, filename: "ghost_busters_img.png")

# Anime
naruto_the_last = Movie.create!(
  title: 'The Last: Naruto the Movie', 
  description: "Two years after the Fourth Shinobi World War, Naruto must stop Toneri Otsutsuki, a descendant of Hamura Otsutsuki, after Toneri causes the moon to descend toward Earth.",
  year: 2015,
  rating: 'PG-13'
  )

  file13 = URI.open('https://homeflicks-seed.s3.amazonaws.com/naruto.mp4')
  naruto_the_last.trailer.attach(io: file13, filename: 'naruto.mp4')
  image9 = URI.open("https://homeflicks-seed.s3.amazonaws.com/naruto_img.jpeg")
  naruto_the_last.thumbnail.attach(io: image9, filename: "naruto_img.jpeg")

your_name = Movie.create!(
  title: "Your Name", 
  description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
  year: 2016,
  rating: 'PG'
  )

  file14 = URI.open('https://homeflicks-seed.s3.amazonaws.com/your_name_1.mp4')
  your_name.trailer.attach(io: file14, filename: 'your_name_1.mp4')
  image10 = URI.open("https://homeflicks-seed.s3.amazonaws.com/your_name_img.jpeg")
  your_name.thumbnail.attach(io: image10, filename: "your_name_img.jpeg")

pokemon = Movie.create!(
  title: "Pokemon: The Power of Us", 
  description: "Five strangers come together to save the day in Fula City when a series of threats endanger the annual Wind Festival and the city's entire population.",
  year: 2019,
  rating: 'PG'
  )

  file15 = URI.open('https://homeflicks-seed.s3.amazonaws.com/pokemon.mp4')
  pokemon.trailer.attach(io: file15, filename: 'pokemon.mp4')
  image11 = URI.open("https://homeflicks-seed.s3.amazonaws.com/pokemon_img.jpeg")
  pokemon.thumbnail.attach(io: image11, filename: "pokemon_img.jpeg")


my_hero_academia = Movie.create!(
  title: "My Hero Academia: Two Heroes", 
  description: "All Might and Deku accept an invitation to visit I Island where they battle against a villain who takes the island hostage.",
  year: 2018,
  rating: 'PG-13'
  )

  file17 = URI.open('https://homeflicks-seed.s3.amazonaws.com/academia.mp4')
  my_hero_academia.trailer.attach(io: file17, filename: 'academia.mp4')
  image12 = URI.open("https://homeflicks-seed.s3.amazonaws.com/hero_img.png")
  my_hero_academia.thumbnail.attach(io: image12, filename: "hero_img.png")



# Sci & Fantasy


maze_runner = Movie.create!(
  title: "Maze Runner: The Death Cure", 
  description: "Thomas leads some escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions that the Gladers have been asking since they arrived in the maze.",
  year: 2018,
  rating: 'PG-13'
  )

  file20 = URI.open('https://homeflicks-seed.s3.amazonaws.com/the_death_cure.mp4')
  maze_runner.trailer.attach(io: file20, filename: 'the_death_cure.mp4')
  image13 = URI.open("https://homeflicks-seed.s3.amazonaws.com/deatch_cure_img.jpeg")
  maze_runner.thumbnail.attach(io: image13, filename: "deatch_cure_img.jpeg")



percy_jackson = Movie.create!(
  title: "Percy Jackson & the Olympians", 
  description: "Always trouble-prone, the life of teenager Percy Jackson (Logan Lerman) gets a lot more complicated when he learns he's the son of the Greek god Poseidon. At a training ground for the children of deities, Percy learns to harness his divine powers and prepare for the adventure of a lifetime: he must prevent a feud among the Olympians from erupting into a devastating war on Earth, and rescue his mother from the clutches of Hades, god of the underworld.",
  year: 2016,
  rating: 'PG-13'
  )

  file22 = URI.open('https://homeflicks-seed.s3.amazonaws.com/percy_jackson_1.mp4')
  percy_jackson.trailer.attach(io: file22, filename: 'percy_jackson_1.mp4')
  image14 = URI.open("https://homeflicks-seed.s3.amazonaws.com/percy_img.webp")
  percy_jackson.thumbnail.attach(io: image14, filename: "percy_img.webp")

back_to_the_future = Movie.create!(
  title: "Back To The Future III", 
  description: "In this final chapter, Marty McFly obtains a 70-year-old message from the time-traveling Dr. Emmett Brown, in which he informs Marty that he has retired to a small town in the Old West. Marty then finds out that the Doc was murdered shortly after sending the letter. In order to save his friend, Marty will have to travel back in time, disentangle a lovestruck Doc from a local schoolmarm, and repair the DeLorean.",
  year: 1990,
  rating: 'PG'
  )

  file23 = URI.open('https://homeflicks-seed.s3.amazonaws.com/back_to_the_future_3.mp4')
  back_to_the_future.trailer.attach(io: file23, filename: 'back_to_the_future_3.mp4')
  image16 = URI.open("https://homeflicks-seed.s3.amazonaws.com/back_3_img.jpeg")
  back_to_the_future.thumbnail.attach(io: image16, filename: "back_3_img.jpeg")

star_wars = Movie.create!(
  title: "Star Wars: The Force Awakens", 
  description: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  year: 2015,
  rating: 'PG-13'
  )

  file24 = URI.open('https://homeflicks-seed.s3.amazonaws.com/star_wars.mp4')
  star_wars.trailer.attach(io: file24, filename: 'star_wars.mp4')
  image17 = URI.open("https://homeflicks-seed.s3.amazonaws.com/star_wars_img.jpeg")
  star_wars.thumbnail.attach(io: image17, filename: "star_wars_img.jpeg")

# romance movies
GenreMovie.create!(movie_id: fiftyShades.id, genre_id: romance.id)
GenreMovie.create!(movie_id: ps_i_love_you.id, genre_id: romance.id)
GenreMovie.create!(movie_id: twilight.id, genre_id: romance.id)
GenreMovie.create!(movie_id: west_side_story.id, genre_id: romance.id)

# comedy movies
GenreMovie.create!(movie_id: spiderman_far_from_home.id, genre_id: comedy.id)
GenreMovie.create!(movie_id: good_boys.id, genre_id: comedy.id)
GenreMovie.create!(movie_id: home_alone.id, genre_id: comedy.id)
GenreMovie.create!(movie_id: ghost_busters.id, genre_id: comedy.id)

# anime movies
GenreMovie.create!(movie_id: naruto_the_last.id, genre_id: anime.id)
GenreMovie.create!(movie_id: your_name.id, genre_id: anime.id)
GenreMovie.create!(movie_id: pokemon.id, genre_id: anime.id)
GenreMovie.create!(movie_id: my_hero_academia.id, genre_id: anime.id)

# scifi & fantasy movies 
GenreMovie.create!(movie_id: maze_runner.id, genre_id: scifi_and_fantasy.id)
GenreMovie.create!(movie_id: percy_jackson.id, genre_id: scifi_and_fantasy.id)
GenreMovie.create!(movie_id: back_to_the_future.id, genre_id: scifi_and_fantasy.id)
GenreMovie.create!(movie_id: star_wars.id, genre_id: scifi_and_fantasy.id)

