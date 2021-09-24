class Api::ActorsController < ApplicationController
  before_action :set_movie
  before_action :set_actor, only: [:show, :update, :destroy]

  def index
    render json: @movie.actors
  end

  def show
    render json: @actor
  end

  def create
    @new_actor = @movie.actors.new(actor_params)
    if @new_actor.save
      render json: @new_actor
    else
      render json: {errors: @new_movie.errors}, status: 422
    end
  end

  def update
    if @actor.update(actor_params)
      render json: @actor
    else
      render json: {errors: @actor.errors}, status: 422
    end
  end

  def destroy
    @actor.destroy
    render json: @actor
  end
  
  private
  def set_movie
    @movie = Movie.find(params[:movie_id])
  end
  def set_actor
    @actor = Actor.find(params[:id])
  end
  def actor_params
    params.require(:actor).permit(:first_name, :last_name, :age)
  end

end
