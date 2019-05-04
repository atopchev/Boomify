# User.destroy_all

10.times do |i|
    User.create(username: Faker::Ancient.god + "#{i}", email: Faker::Internet.email, password: "password")
end

artists

songs
albums
artists
playlists

a1 = Artist.create!(name: "Ms. Lauryn Hill")
a2 = Artist.create!(name: "Mac Miller")
a3 = Artist.create!(name: "Father John Misty")
a4 = Artist.create!(name: "Drake")
a5 = Artist.create!(name: "Foxygen")
a7 = Artist.create!(name: "Tash Sultana")
a8 = Artist.create!(name: "Glass Animals")
a9 = Artist.create!(name: "Modest Mouse")

al1 = Album.create!(name: "Scorpion " , artist_id: a4.id, year: 2018 )
al2 = Album.create!(name: "Diplomatic Immunity" , artist_id: a4.id , year: 2018 )
al3 = Album.create!(name: "The Miseducation of Lauryn Hill", artist_id: a1.id , year: 1998 )
al4 = Album.create!(name: "What's the Use?", artist_id: a2.id , year: 2018 )
al5 = Album.create!(name: "The Divine Feminine" , artist_id: a2.id, year: 2016 )
al6 = Album.create!(name: "Real Love Baby", artist_id: a3.id , year: 2016)
al7 = Album.create!(name: "Hang", artist_id: a5.id , year: 2017)
al8 = Album.create!(name: "Notion", artist_id: a7.id , year: 2016)
al9 = Album.create!(name: "Glass Animals", a8.id, year: 2013)
al10 = Album.create!(name: "We Were Dead Before The Ship Even Sank", artist_id: a9.id, year: 2007)

