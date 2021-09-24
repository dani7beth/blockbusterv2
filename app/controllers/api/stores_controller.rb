class Api::StoresController < ApplicationController
  before_action :set_store, only: [:show, :update, :destroy]
  def index
    render json: Store.all
  end

  def show
    render json: @store
  end

  def create
    @new_store = Store.new(store_params)
    if @new_store.save
      render json: @new_store
    else
      render json: {errors: @new_store.errors}, status: 422
    end
  end

  def update
    if @store.update(store_params)
      render json: @store
    else
      render json: {errors: @store.errors}, status: 422
    end
  end

  def destroy
    @store.destroy
    render json: @store
  end

  private
  def set_store
    @store = Store.find(params[:id])
  end
  def store_params
    params.require(:store).permit(:name, :location, :open_time, :close_time)
  end
end
