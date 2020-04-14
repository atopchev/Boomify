class Playlist < ApplicationRecord
    validates :name, presence: true

    belongs_to :author, 
        foreign_key: :user_id,
        class_name: 'User'
    
    has_many :mappings, 
        foreign_key: :playlist_id, 
        class_name: 'SongMapping'
end