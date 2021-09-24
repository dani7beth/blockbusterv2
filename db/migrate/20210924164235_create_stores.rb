class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :location
      t.time :open_time
      t.time :close_time

      t.timestamps
    end
  end
end
