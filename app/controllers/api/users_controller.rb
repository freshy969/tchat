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
    @user.has_thread?(current_user)
  end

  def index
    @users = User.all
  end

  def edit
    @user = current_user
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      # debugger
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :screen_name, :city, :pronouns, :age, :img_url, :bio, :first_date_idea, :my_anthem, :hobbies, :my_aesthetic, :looking_for)
  end

end
