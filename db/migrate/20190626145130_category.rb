class Category < ActiveRecord::Migration[5.2]
  def change
    create_table :category do |t|
      t.string :name
      

      t.timestamps
    end
  end
end
