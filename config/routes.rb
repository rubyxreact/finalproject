Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login }

  resource :user, only: [:show, :update]

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
  
  
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts

  resources :categories

  get 'posts/:id/comments', to: 'posts#get_comments'

  get 'categories/:id/posts', to: 'categories#get_posts'

  post 'auth/register', to: 'users#register'

  post 'auth/login', to: 'users#login'
  
  get 'test', to: 'users#test'
end
