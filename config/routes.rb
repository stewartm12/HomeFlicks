Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :genres, only: [:index]
    resources :movies, only: [:show]
    resource :my_list, only: [:create, :destroy]

    get 'search', to: 'movies#search', as: :movies_search
  end
  resources :upper do 
    resources :what
  end
end
