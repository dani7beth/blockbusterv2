class Store < ApplicationRecord
  has_many :movies, dependent: :destroy
end
