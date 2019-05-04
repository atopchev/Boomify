# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  artist_img :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord

    has_many :songs,
        foreign_key: :artist_id, 
        class_name: 'Song'

    has_many :albums, 
        foreign_key: :artist_id,
        class_name: 'Album'
end
