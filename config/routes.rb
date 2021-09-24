Rails.application.routes.draw do
  namespace :api do
    resources :stores do
      resources :movies
    end
    resources :movies do
      resources :actors
    end
    resources :awards
  end
end
