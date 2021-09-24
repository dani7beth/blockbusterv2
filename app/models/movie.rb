class Movie < ApplicationRecord
  belongs_to :store
  has_many :actors, dependent: :destroy
end
