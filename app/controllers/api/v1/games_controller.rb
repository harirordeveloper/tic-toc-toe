module Api
  module V1
    class GamesController < BaseController
    	before_action :fetch_game, only: [:update]

    	def create
    		@game = Game.create(game_params)

    		render json: { gameId: @game.id, players: @game.players.as_json(only: [:id, :name]) }
			end

			def update
				@game.update(game_update_params)
			end

			private

				def game_params
					params.permit(:game_over, :winner_id, :gamer_squares, :next_turn, :last_move, gamer_squares: [], squares: [], plays_attributes: :player_id)
				end

				def game_update_params
					params.permit(:game_over, :winner_id, :gamer_squares, :next_turn, :last_move, gamer_squares: [], squares: [])
				end

				def fetch_game
					@game ||= Game.find_by(id: params[:id])
				end
    end
  end
end
