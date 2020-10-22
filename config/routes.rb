Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :boards, only:[:index]
    end 
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:show, :create, :index]
    resources :boards, only: [:create, :show, :update,:destroy]
    resources :board_pins, only:[:index, :create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end



#/users/userid/boards/boardId