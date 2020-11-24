class Api::BoardPinsController < ApplicationController
    def index
      if params[:board_id]
        @board_pins = BoardPin.where(board_id: params[:board_id])
        render :index
      else
        @board_pins = BoardPin.all
        render :index
      end 
        
    end

    def create
        @board_pin = BoardPin.create(board_pin_params)
        if @board_pin.save
            render :show
        else
            render json: @board_pin.errors.full_messages, status: 404
        end 
    end 

    def show
        

    end 


    def destroy
      @board_pin= BoardPin.find_by(pin_id: params[:pin_id])
      if @board_pin.destroy
        render json: @pin_id
      else 
        render json: @board_pin.errors.full_messages, status: 422
      end 
    end


    private 
    def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end 
end
