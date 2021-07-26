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

# Code Sample
```ruby
class Api::MoviesController < ApplicationController
  def show
    @movie = Movie.find(params[:id])
    render "api/movies/show"
  end

  def search
        query_string = params[:query_string]
        
        if query_string.length == 0 
            render json: {}
        else 
            query_string = query_string.chars.map{|char| char.downcase}.join
            @movies = Movie.with_attached_thumbnail
                .where('LOWER(title) LIKE ?', '%' + query_string + '%')

            if @movies.empty?
                render json: {}
            else 
                render "api/movies/movies"
            end
        end
    end
end
```
* In this sample, we are grabbing the query string from the params which was sent from the frontend of the application. If the query string is empty quotes, we would just send back an empty json response. Otherwise, we would convert all the existing characters into lowercase. After completing that task, i have used active record queries combined with REGEX to find any movies that is the same or similar to the query string. If none could be found, we return an empty json response. Otherwise, we head into "api/movies/movies" to modify our data to send it back the frontend

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
