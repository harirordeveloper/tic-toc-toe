Rails.application.routes.draw do
  devise_for :users
  resources :games
  namespace :api do
    namespace :v1 do
      resources :games
    end
  end

  authenticated :user do
    root 'games#index', as: :authenticated_root
  end
  root to: 'homes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
