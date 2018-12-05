Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: [:edit, :new], defaults: { format: :json }
  end

  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
