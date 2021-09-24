class Api::MoviesController < ApplicationController
  before_action :set_store
  before_action :set_movie, only: [:show, :update, :destroy]

  def index
    render json: @store.movies
  end

  def show
    render json: @movie
  end

  def create
    @new_movie = @store.movies.new(movie_params)
    if @new_movie.save
      render json: @new_movie
    else
      render json: {errors: @new_movie.errors}, status: 422
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: {errors: @movie.errors}, status: 422
    end
  end

  def destroy
    @movie.destroy
    render json: @movie
  end
  
  private
  def set_store
    @store = Store.find(params[:store_id])
  end
  def set_movie
    @movie = Movie.find(params[:id])
  end
  def movie_params
    params.require(:movie).permit(:title, :genre, :duration, :description)
  end

end
