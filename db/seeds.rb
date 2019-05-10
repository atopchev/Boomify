User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all

10.times do |i|
    User.create(username: Faker::Ancient.god + "#{i}", email: Faker::Internet.email, password: "password")
end

u1 = User.create!(username: "Johnny John", email: "johnny@gmail.com", password: "password")
u5 = User.create!(username: "Tanya", email: "tanya@gmail.com", password: "password")
u4 = User.create!(username: "Peter Piper", email: "peter@gmail.com", password: "password")
u3 = User.create!(username: "Luna Lovegood", email: "lily@gmail.com", password: "password")
u2 = User.create!(username: "Papa John", email: "jim@gmail.com", password: "password")

a1 = Artist.create!(name: "Ms. Lauryn Hill")
a2 = Artist.create!(name: "Mac Miller")
a3 = Artist.create!(name: "Father John Misty")
a4 = Artist.create!(name: "Drake")
a5 = Artist.create!(name: "Foxygen")
a7 = Artist.create!(name: "Tash Sultana")
a8 = Artist.create!(name: "Glass Animals")
a9 = Artist.create!(name: "Modest Mouse")

al1 = Album.create!(name: "Scorpion " , artist_id: a4.id, year: 2018 )
al2 = Album.create!(name: "The Miseducation of Lauryn Hill", artist_id: a1.id , year: 1998 )
al3 = Album.create!(name: "What's the Use?", artist_id: a2.id , year: 2018 )
al4 = Album.create!(name: "The Divine Feminine" , artist_id: a2.id, year: 2016 )
al5 = Album.create!(name: "Real Love Baby", artist_id: a3.id , year: 2016)
al6 = Album.create!(name: "Hang", artist_id: a5.id , year: 2017)
al7 = Album.create!(name: "Notion", artist_id: a7.id , year: 2016)
al8 = Album.create!(name: "Glass Animals", artist_id: a8.id, year: 2013)
al9 = Album.create!(name: "We Were Dead Before The Ship Even Sank", artist_id: a9.id, year: 2007)


s1 = Song.create!(name: "Survival",artist_id: a4.id, album_id: al1.id, length: "2:16" )
s2 = Song.create!(name: "Nonstop",artist_id: a4.id, album_id: al1.id, length: "3:58" )
s3 = Song.create!(name: "Elevate",artist_id: a4.id, album_id: al1.id, length: "3:04" )
s4 = Song.create!(name: "Emotionless",artist_id: a4.id, album_id: al1.id, length: "5:02" )
s5 = Song.create!(name: "God's Plan",artist_id: a4.id, album_id: al1.id, length: "3:18" )
s6 = Song.create!(name: "I'm Upset",artist_id: a4.id, album_id: al1.id, length: "3:34" )
s7 = Song.create!(name: "8 Out Of 10",artist_id: a4.id, album_id: al1.id, length: "3:15" )
s8 = Song.create!(name: "Mob Ties",artist_id: a4.id, album_id: al1.id, length: "3:25" )
s9 = Song.create!(name: "Can't Take A Joke",artist_id: a4.id, album_id: al1.id, length: "2:43" )
s10 = Song.create!(name: "Sandra's Rose",artist_id: a4.id, album_id: al1.id, length: "3:36" )
s11 = Song.create!(name: "Talk Up (feat. Jay-Z)",artist_id: a4.id, album_id: al1.id, length: "3:43" )
s12 = Song.create!(name: "Is There More",artist_id: a4.id, album_id: al1.id, length: "3:46" )
s13 = Song.create!(name: "Peak",artist_id: a4.id, album_id: al1.id, length: "3:26" )
s14 = Song.create!(name: "Summer Games",artist_id: a4.id, album_id: al1.id, length: "4:07" )
s15 = Song.create!(name: "Jaded",artist_id: a4.id, album_id: al1.id, length: "4:22" )
s16 = Song.create!(name: "Nice For What",artist_id: a4.id, album_id: al1.id, length: "3:30" )
s17 = Song.create!(name: "Finesse",artist_id: a4.id, album_id: al1.id, length: "3:02" )
s18 = Song.create!(name: "Ratchet Happy Birthday",artist_id: a4.id, album_id: al1.id, length: "3:27" )
s19 = Song.create!(name: "That's How You Feel",artist_id: a4.id, album_id: al1.id, length: "2:37" )
s20 = Song.create!(name: "Blue Tint",artist_id: a4.id, album_id: al1.id, length: "2:42" )
s21 = Song.create!(name: "In My Feelings",artist_id: a4.id, album_id: al1.id, length: "3:37" )
s22 = Song.create!(name: "Don't Matter To Me (with Michael Jackson)",artist_id: a4.id, album_id: al1.id, length: "4:05" )
s23 = Song.create!(name: "After Dark (feat. Static Major & Ty Dolla $ign)",artist_id: a4.id, album_id: al1.id, length: "4:49" )
s24 = Song.create!(name: "Final Fantasy",artist_id: a4.id, album_id: al1.id, length: "3:39" )
s25 = Song.create!(name: "March 14",artist_id: a4.id, album_id: al1.id, length: "5:09" )

lh1  = Song.create!(name: "Intro" , album_id: al2.id , artist_id: a1.id , length: "0:47" )
lh2  = Song.create!(name: "Lost Ones" , album_id: al2.id , artist_id: a1.id , length: "5:33" )
lh3  = Song.create!(name: "Ex-Factor" , album_id: al2.id , artist_id: a1.id , length: "5:26" )
lh4  = Song.create!(name: "To Zion" , album_id: al2.id , artist_id: a1.id , length: "6:09" )
lh5  = Song.create!(name: "Doo Wop (That Thing)" , album_id: al2.id , artist_id: a1.id , length: "5:20")
lh6  = Song.create!(name: "Superstar" , album_id: al2.id , artist_id: a1.id , length: "4:57")
lh7  = Song.create!(name: "Final Hour" , album_id: al2.id , artist_id: a1.id , length: "4:16" )
lh8  = Song.create!(name: "When It Hurts so Bad" , album_id: al2.id , artist_id: a1.id , length: "5:42")
lh9  = Song.create!(name: "I Used to Love Him" , album_id: al2.id , artist_id: a1.id , length: "5:39" )
lh10  = Song.create!(name: "Forgive Them Father" , album_id: al2.id , artist_id: a1.id , length: "5:15" )
lh11  = Song.create!(name: "Every Ghetto, Every City" , album_id: al2.id , artist_id: a1.id , length: "5:14" )
lh12  = Song.create!(name: "Nothing Even Matters" , album_id: al2.id , artist_id: a1.id , length: "5:50" )
lh13  = Song.create!(name: "Everything Is Everything" , album_id: al2.id , artist_id: a1.id , length: "4:53")
lh14  = Song.create!(name: "The Miseducation of Lauryn Hill" , album_id: al2.id , artist_id: a1.id , length: "3:55" )
lh15  = Song.create!(name: "Can't Take My Eyes Off of You" , album_id: al2.id , artist_id: a1.id , length: "3:41")
lh16  = Song.create!(name: "Tell Him" , album_id: al2.id , artist_id: a1.id , length: "4:40" )


p1 = Playlist.create!(name: "Daily Mix 1", user_id: u1.id)
p1 = Playlist.create!(name: "Daily Mix 2", user_id: u2.id)
p1 = Playlist.create!(name: "Daily Mix 3", user_id: u3.id)
p1 = Playlist.create!(name: "Daily Mix 4", user_id: u4.id)
p1 = Playlist.create!(name: "Daily Mix 5", user_id: u5.id)
p1 = Playlist.create!(name: "Daily Mix 6", user_id: u1.id)
p1 = Playlist.create!(name: "Release Radar", user_id: u1.id)
p1 = Playlist.create!(name: "Your Top Songs of 2018", user_id: u1.id)
# collection playlists
p1 = Playlist.create!(name: "work out bro", user_id: u1.id)
p1 = Playlist.create!(name: "yas henny", user_id: u2.id)
p1 = Playlist.create!(name: "shower jams", user_id: u3.id)
p1 = Playlist.create!(name: "roaaaadtripppp", user_id: u4.id)
p1 = Playlist.create!(name: "super focus time", user_id: u5.id)
p1 = Playlist.create!(name: "lets get it", user_id: u1.id)
p1 = Playlist.create!(name: "i party", user_id: u1.id)
