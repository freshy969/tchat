class Api::MessagethreadsController < ApplicationController
  def create
    # @messagethread = Messagethread.new(messagethread_params)
    # if @messagethread.save
    #   render: api_messagethread_url(@messagethread)
    # else
  end

  def show
  end

  def index
    @messagethreads = Messagethread.all
  end

  private

  def messagethread_params
    params.require(:messagethread).permit(:initiator_id, :receiver_id)
  end

end
