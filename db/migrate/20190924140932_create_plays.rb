class CreatePlays < ActiveRecord::Migration[6.0]
  def change
    create_table :plays do |t|
      t.references :game, null: false, foreign_key: true
      t.references :player, null: false, index: true

      t.timestamps
    end
    
    add_foreign_key :plays, :users, column: :player_id
  end
end
