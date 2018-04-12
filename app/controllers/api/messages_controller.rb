class Api::MessagesController < ApplicationController
  def create
  end

  def show
  end

  def index
    @messages = Message.all
  end
end
