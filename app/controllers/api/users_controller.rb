class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render {}
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
