class Api::PinsController < ApplicationController
    

    def index
        @pins = Pin.all
        render :index
    end 

    def show
    @pin = Pin.find(params[:id])
    render :show
        
    end

    def create
        
        @pin = Pin.create(pin_params)
        if @pin.save
            render :show
        else 
            render  json: @pin.errors.full_messages, status: 422
        end 
    end 

    
    def destroy
      @pin= Pin.find(params[:id])
      if @pin.destroy
        render json: @pin.id
      else 
        render json: @pin.errors.full_messages, status: 422
      end 
    end
        
    


    private
    def pin_params
        params.require(:pin).permit(:description, :content, :photo)
    end 


end 
