class Game < ApplicationRecord
  has_many :plays
  has_many :players, through: :plays
  has_one :winner

  serialize :game_squares, Array
  serialize :squares, Array
  serialize :game, JSON
  accepts_nested_attributes_for :plays

  def winner
    players.find_by(id: winner_id )
  end

end
