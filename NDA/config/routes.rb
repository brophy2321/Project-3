Rails.application.routes.draw do

  resources :categories
    resources :disasters
  

  root to: 'catagories#index'
end
