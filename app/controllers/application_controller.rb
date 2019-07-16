class ApplicationController < ActionController::API
 
    before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :authenticate_request
    attr_reader :current_user

    def configure_permitted_parameters
        devise_parameter_sanitizer.for(:sign_up) << :name
        devise_parameter_sanitizer.for(:sign_up) << :provider
        devise_parameter_sanitizer.for(:sign_up) << :uid
    end

    private
    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end
end