@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :name, :year
        json.artist album.artist
    end
end