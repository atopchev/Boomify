class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user
    
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_token!
    end

    def logout!
        current_user.reset_token!
    end

    def logged_in?
        !!(current_user)
    end

    def require_logout
        redirect_to user_url(current_user) if logged_in?
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

end
