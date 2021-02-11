class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.boolean :game_over
      t.string :gamer_squares
      t.string :winner_id
      t.integer :next_turn
      t.string :last_move
      t.string :squares
      t.string :game

      t.timestamps
    end
  end
end
