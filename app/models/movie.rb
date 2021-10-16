class Movie < ApplicationRecord
  belongs_to :store
  has_many :actors, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :awards, dependent: :destroy
end
