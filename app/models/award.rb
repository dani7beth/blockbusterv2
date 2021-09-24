class Award < ApplicationRecord
  belongs_to :movie
  belongs_to :actor

  def self.awards
#     SELECT aw.id, aw.movie_id, aw.actor_id, aw.name, a.first_name, a.last_name, m.title FROM awards aw 
# JOIN Actors a ON aw.actor_id = a.id
# JOIN Movies m ON aw.movie_id = m.id
    select("awards.id, awards.movie_id, awards.actor_id, awards.name, actors.first_name, actors.last_name, movies.title")
    .joins("inner join actors on actors.id = awards.actor_id")
    .joins("inner join movies on movies.id = awards.movie_id")
  end
end
