class Api::PinsController < ApplicationController

    def index
        @pins = Pin.all
        render :index
    end 

    def show
    @pin = Pin.find(params[:id])
    render :show
        
    end



end 
