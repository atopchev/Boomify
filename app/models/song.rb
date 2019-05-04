# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  artist_id  :integer          not null
#  album_id   :integer
#  length     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
