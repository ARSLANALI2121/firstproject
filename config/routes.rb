Rails.application.routes.draw do
  root  'chatroom#index'
  get 'login', to: 'sessions#new'

  #resources :message
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
