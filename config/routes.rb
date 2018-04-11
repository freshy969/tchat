Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :messagethreads, only: [:show, :index, :create]
    resources :messages, only: [:show, :index, :create]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
