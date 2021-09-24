class CreateActors < ActiveRecord::Migration[6.1]
  def change
    create_table :actors do |t|
      t.belongs_to :movie, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :age

      t.timestamps
    end
  end
end
