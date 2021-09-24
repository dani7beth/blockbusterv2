class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.belongs_to :store, null: false, foreign_key: true
      t.string :title
      t.string :genre
      t.time :duration
      t.string :description

      t.timestamps
    end
  end
end
