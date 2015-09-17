class MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  def create
    Message.create!(body: params[:body])
    head :created
  end

end
