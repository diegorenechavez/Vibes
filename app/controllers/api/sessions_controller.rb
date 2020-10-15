class Api::SessionsController < ApplicationController
    
  def create
    
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # debugger
    if @user
      login!(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ['Invalid Username or Password'], status: 404
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['No one to logout'], status: 404
    end
  end
end
# class Api::SessionsController < ApplicationController
#     def create
#       @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
#       if @user.nil?
#          render json: ['Invalid username or password'], status: 404
#       else
#          login!(@user)
#          render :show
#       end
#    end
#    def destroy
#       if current_user
#          logout!
#          render json: {}
#       else
#          render json: ['Logout request failed'], status: 404
#       end
#    end
# end