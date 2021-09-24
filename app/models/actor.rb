class Actor < ApplicationRecord
  belongs_to :movie
  has_many :awards, dependent: :destroy
end
