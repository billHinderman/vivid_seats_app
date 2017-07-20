class Cx::ItemsController < ApplicationController
  before_action :get_item,
  only: [
    :show,
    :edit,
  ]

  def index
    @react_props = {

    }
    render '/items/index'
  end

  def show
    @react_props = {
      id: @item.id,
    }
    render '/items/show'
  end

  def create
    @react_props = {

    }
    render '/items/create'
  end

  def edit
    @react_props = {
      id: @item.id,
    }
    render '/items/edit'
  end

  private

  private

  def get_item
    @item = Item.find(item_id)
  end

  # PARAMS
  def item_id
    params[:item_id]
  end
end
