Rails.application.routes.draw do
  # CX VIEWS
  root                                                      controller: 'cx/pages',     action: 'index'
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
      post      '/',                                        controller: 'api/items',     action: 'create'
      get       '/:item_id',                                controller: 'api/items',     action: 'show'
      patch     '/:item_id',                                controller: 'api/items',     action: 'update'
      delete    '/:item_id',                                controller: 'api/items',     action: 'destroy'
      post      '/:item_id/duplicate',                      controller: 'api/items',     action: 'duplicate'
    end
  end
end
