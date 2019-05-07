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

require 'test_helper'

class SongMappingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
