class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.save
  end

  def show
  end

  def index
    @messages = Message.all
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :message_thread_id, :message)
  end
end
