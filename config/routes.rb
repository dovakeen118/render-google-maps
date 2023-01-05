Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  get "/vanilla-google-map", to: "homes#index"
  get "/simple-js-loader-map", to: "homes#index"
  get "/advanced-js-loader-map", to: "homes#index"
  get "/react-google-map", to: "homes#index"

  resources :cats
end
