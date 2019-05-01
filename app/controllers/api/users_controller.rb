class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else 
            render json: @user.errors
        end
    end

    # def show
    #     @user = User.find(params[:id])
        
    #     if @user

    #     else 

    #     end
    # end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end
