class Api::BoardsController < ApplicationController
    def index

        @user = User.find(params[:user_id])
        @boards = @user.boards
        render :index
    end 

    def show
        @board = Board.find(params[:id])
        render :show
    end 

    def update
      @board = Board.find_by(id: params[:id])
      if @board && @board.user_id == current_user.id 
        if @board.update(board_params)
          render :show
        else
          render json: @board.errors.full_messages, status: 422
        end 
      end
    end



    def create 
        @board = Board.new(board_params)
        @board.user_id = current_user.id
        if @board.save
            render :show
        else 
            render json: @board.errors.full_messages, status: 404
        end 
    end 

    def destroy
      @board= Board.find(params[:id])
      if @board.destroy
        render json: @board.id
      else 
        render json: @board.errors.full_messages, status: 422
      end 
    end

  private

  def board_params
    params.require(:board).permit(:description, :name)
  end





end
