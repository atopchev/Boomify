# == Schema Information
#
# Table name: song_mappings
#
#  id          :bigint           not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SongMapping < ApplicationRecord

    belongs_to :song, 
        foreign_key: :song_id, 
        class_name: 'Song'

    belongs_to :playlist, 
        foreign_key: :playlist_id,
        class_name: 'Playlist'
end
