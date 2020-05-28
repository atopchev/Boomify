json.set! @playlist.id do
    json.extract! @playlist, :id, :name, :user_id, :created_at, :updated_at
    json.username @playlist.author.username
end