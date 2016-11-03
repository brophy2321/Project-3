Rails.application.routes.draw do
  resources :categories
    resources :disasters do
      resources :comments
    end

  root 'categories#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
