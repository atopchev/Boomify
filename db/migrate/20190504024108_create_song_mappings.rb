class CreateSongMappings < ActiveRecord::Migration[5.2]
  def change
    create_table :song_mappings do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
    
      t.timestamps
    end
    add_index :song_mappings, :playlist_id
    add_index :song_mappings, :song_id
  end
end
