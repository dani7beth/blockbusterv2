class ChangeDurationToString < ActiveRecord::Migration[6.1]
  def up
    change_column :movies, :duration, :string
    change_column :stores, :open_time, :string
    change_column :stores, :close_time, :string
  end
  def down
    change_column :movies, :duration, :time
    change_column :stores, :open_time, :time
    change_column :stores, :close_time, :time
  end
end
