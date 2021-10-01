class Api::AwardsController < ApplicationController
  before_action :set_award, only: [:show, :update, :destroy]
  def index
    render json: Award.awards
  end

  def show
    render json: @award
  end

  def create
    @new_award = Award.new(award_params)
    if @new_award.save
      render json: @new_award
    else
      render json: {errors: @new_award.errors}, status: 422
    end
  end

  def update
    if @award.update(award_params)
      render json: @award
    else
      render json: {errors: @award.errors}, status: 422
    end
  end

  def destroy
    @award.destroy
    render json: @award
  end

  private
  def set_award
    @award = Award.find(params[:id])
  end
  
  def award_params
    params.require(:award).permit(:name)
  end
end
