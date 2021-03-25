class Api::MyListsController < ApplicationController
  def create 
    my_list = UserMovie.new(my_list_params)

    if my_list.save
      @user = User.find(my_list.user_id)
      render 'api/users/show'
    else 
      render json: my_list.errors.full_messages
    end
  end

  def destroy 
    my_list = UserMovie.find_by(user_id: params[:user_id], movie_id: params[:movie_id])        
    my_list.destroy
    
    @user = User.find(my_list.user_id)
    render 'api/users/show'
  end

  private
  def my_list_params
    params.require(:my_list).permit(:user_id, :movie_id)
  end
end