# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
awards = ["Best Actor", "Best Adapted Screenplay", "Best Original SCreenplay", "Best Animated Feature Film", "Best Cinematography", "Best Costume Design", "Best Film Editing", "Best Makeup", "Best Picture", "Best Song"]
genres = ["Classic","Drama","Thriller","Action","Comedy","Romance","Musical","Animation","Horror","Foreign","Independent","Documentary"]
def random_hour(from, to)
  (Date.today + rand(from...to).hour + rand(0..60).minutes).strftime("%H:%M:%S")
end
10.times do 
  store = Store.create(name: Faker::Company.name, location: Faker::Address.full_address, open_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now).strftime("%r"), close_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now).strftime("%r"))
  50.times do |m|
    movie = store.movies.create(title: Faker::Movie.title, genre: genres.sample, duration: random_hour(1, 2), description: Faker::Movie.quote, price: Faker::Commerce.price)
    10.times do |a|
      movie.actors.create(first_name: Faker::Name.first_name ,last_name: Faker::Name.last_name ,age: rand(1..100))
      Award.create(name: awards.sample, movie_id: m, actor_id: a)
    end
  end
end