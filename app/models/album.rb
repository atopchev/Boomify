# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  artist_id  :integer          not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord

    belongs_to :artist,
        foreign_key: :artist_id, 
        class_name: 'Artist'
         
end
