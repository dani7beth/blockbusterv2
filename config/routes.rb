Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :stores do
      resources :movies
    end
    resources :movies do
      resources :actors
      resources :reviews
    end
    resources :awards
  end
end
