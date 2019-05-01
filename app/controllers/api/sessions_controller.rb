class Api::SessionsController < ApplicationController
    
    def create
        @user = User.find_by_credentials(
            params[:user][:usename],
            params[:user][:password]
        )
        if @user 
            login(@user)
            render "api/users/show"
        else 
            render json: 'Invalid credentials', status: 422
        end
    end

    def destroy
        if logged_in?
            logout!
            render :json {}
        else 
            render json: "There is no current user. -Session Controller", status: 404
        end
    end

end
