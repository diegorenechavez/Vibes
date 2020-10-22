class Api::BoardPinsController < ApplicationController
    def index
        @board_pins = BoardPin.all
        render :index
        
    end

    def create
        @board_pin = BoardPin.create(board_pin_params)
        if @board_pin.save
            render :show
        else
            render json: @board_pin.errors.full_messages, status: 404
        end 
    end 


    def destroy
    end 


    private 
    def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end 
end
