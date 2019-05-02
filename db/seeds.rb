# User.destroy_all

10.times do |i|
    User.create(username: Faker::Ancient.god + "#{i}", email: Faker::Internet.email, password: "password")
end


