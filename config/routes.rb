Rails.application.routes.draw do
  # CX VIEWS
  root                                                      controller: 'cx/items',     action: 'index'
  scope '/items' do
    root                                                    controller: 'cx/items',     action: 'index'
    get '/new',                                             controller: 'cx/items',     action: 'create'
    get '/:item_id',                                        controller: 'cx/items',     action: 'show'
    get '/:item_id/edit',                                   controller: 'cx/items',     action: 'edit'
  end


  # INTERNAL API
  scope '/api' do
    scope '/items' do
      root                                                  controller: 'api/items',     action: 'index'
      get       '/:item_id',                                controller: 'api/items',     action: 'show'
      post      '/new',                                     controller: 'api/items',     action: 'create'
      patch     '/:item_id',                                controller: 'api/items',     action: 'update'
      post      '/:item_id/duplicate',                      controller: 'api/items',     action: 'duplicate'
      delete    '/:item_id',                                controller: 'api/items',     action: 'destroy'
    end
  end
end
