# README
![homeflicks_logo-3e1102064c26f11c8d00ce84d00623fd9d728f68b80903417a7e7b53ea247afc](https://user-images.githubusercontent.com/68972854/117230360-e8864c00-adea-11eb-9227-5b69e50d2174.png)


# Live Demo
* Create an account or sign in as a demo user to enjoy the full Homeflicks streaming service experience.
[HomeFlicks Site](https://homeflicks.herokuapp.com/#/)


# HomeFlicks
* HomeFlicks is a  subscription-based streaming service inspired by Netflix that allows members to watch TV shows and movies without commercials on an internet-connected device.   
* This web service was built in 10 days with more features, refactors, and bug fixes on its way.

# Overview
* Secured frontend to backend user authentication using BCrypt.
* On click of an available movie, user is brought to a fullScreen where the movie is played
* On login, users are greeted with a trailer from an available show.
* Users can hover over movie thumbnails to watch a trailer of the movie.
* On click of the play button, User is brought tofullscreen where the movie is then played.


# Features
## Dynamic Banner Video
* The jumbotron(video) in the browse page automaticaly plays after a few seconds whenever a user logs in
![ezgif com-gif-maker](https://user-images.githubusercontent.com/68972854/117232356-f76efd80-adee-11eb-96c5-77164778d440.gif)

## Dynamic Video Thumbnail
* When the mouse hovers over a thumbnail, the image dynamically grows and fires a function to play the trailer. The trailer will play after a few seconds have passed, and once the mouse leaves, the video will display its thumbnail once again.
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/68972854/117232668-9c89d600-adef-11eb-9595-629266e46067.gif)

## Dynamic Search Bar
* A dynamic search bar was implemented to find the desired movie. As the search bar gets updated repeatedly, it checks the backend for any movies that is on par with what the user is searching for.
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/68972854/117233782-ca701a00-adf1-11eb-992a-3724df17ed8e.gif)
