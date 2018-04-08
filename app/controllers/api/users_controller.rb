class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :screen_name, :city, :pronouns, :age, :img_url, :bio, :first_date_idea, :my_anthem, :hobbies, :my_aesthetic, :looking_for)
  end

end
