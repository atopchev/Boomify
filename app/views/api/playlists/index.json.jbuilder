
@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :name, :user_id 
        json.username playlist.author.username
    end
end