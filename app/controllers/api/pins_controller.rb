class Api::PinsController < ApplicationController
    

    def index
      if params[:user_id]
        @pins = Pin.where(user_id: params[:user_id])
        render :index
      else 
        @pins = Pin.all
        render :index
      end
    end 

    def show
    @pin = Pin.find(params[:id])
    render :show
        
    end

    def create
        @user = User.find(params[:user_id])
        @pin = Pin.create(pin_params)
        @pin.user_id = current_user.id
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
