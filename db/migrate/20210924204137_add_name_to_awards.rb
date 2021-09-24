class AddNameToAwards < ActiveRecord::Migration[6.1]
  def change
    add_column :awards, :name, :string
  end
end
