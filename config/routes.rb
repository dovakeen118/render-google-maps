Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  get "/map", to: "homes#index"
  get "/simple-map", to: "homes#index"

  resources :cats
end
