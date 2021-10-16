class Api::ReviewsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_movie
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: @movie.reviews
  end

  def show
    render json: @review
  end

  def create
    @new_review = @current_user.reviews.new(review_params)
    if @new_review.save
      render json: @new_review
    else
      render json: {errors: @new_review.errors}, status: 422
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: {errors: @review.errors}, status: 422
    end
  end

  def destroy
    @review.destroy
    render json: @review
  end
  
  private
  def set_movie
    @movie = Movie.find(params[:movie_id])
  end
  def set_review
    @review = Review.find(params[:id])
  end
  def review_params
    params.require(:review).permit(:body)
  end

end
