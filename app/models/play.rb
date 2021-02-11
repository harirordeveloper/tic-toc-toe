class Play < ApplicationRecord
  belongs_to :game
  belongs_to :player, class_name: 'User', foreign_key: 'player_id'
end
