class Song < ApplicationRecord

    belongs_to :artist
    belongs_to :album
    has_many :mappings, 
        foreign_key: :song_id, 
        class_name: 'SongMapping'

    has_one_attached :audio
end