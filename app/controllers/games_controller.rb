class GamesController < ApplicationController
  def index
  	@winning_games = current_user.games.where(winner_id: current_user.id)
  	@lost_games = current_user.games.where.not(winner_id: current_user.id)
  	@no_result_games = current_user.games.where(winner_id: nil)
  	@opponents = User.where.not(id: current_user.id)
  	@players = User.where(id: [params[:opponent], current_user.id]).as_json(only: [:id, :name])
  end

  def create
  	@players = User.where(id: [ current_user.id, params[:opponent]]).as_json(only: [:id, :name])
  end
end
