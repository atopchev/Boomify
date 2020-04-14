class Song < ApplicationRecord

    belongs_to :artist, 
        foreign_key: :artist_id,
        class_name: 'Artist'

    belongs_to :album,
        foreign_key: :album_id,
        class_name: 'Album'

    has_many :mappings, 
        foreign_key: :song_id, 
        class_name: 'SongMapping'

end