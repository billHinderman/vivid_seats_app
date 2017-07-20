class Api::ItemsController < ApplicationController
  before_action :get_item,
  only: [
    :show,
    :update,
    :duplicate,
    :destroy
  ]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item, status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json: @item, status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def duplicate
    @duplicated_item = @item.amoeba_dup

    if @duplicated_item.save
      render json: @duplicated_item, status: :created
    else
      render json: @duplicated_item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @item.destroy
      render json: { head: :no_content }
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

  def get_item
    @item = Item.find(item_id)
  end

  # PARAMS
  def item_id
    params[:item_id]
  end

  def item_params
    params.permit(
      :description,
      :title,
      payload: [
        :content,
      ],
    )
  end
end
