# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :name, presence: true

    belongs_to :author, 
        foreign_key: :user_id,
        class_name: 'User'
    
    has_many :mappings, 
        foreign_key: :playlist_id, 
        class_name: 'SongMapping'
end
