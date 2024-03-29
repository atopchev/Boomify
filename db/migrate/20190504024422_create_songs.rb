class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.integer :artist_id, null: false
      t.integer :album_id
      t.string :length, null: false

      t.timestamps
    end
    add_index :songs, :artist_id
    add_index :songs, :album_id
  end
end
