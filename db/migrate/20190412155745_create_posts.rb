class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.string :author
      t.timestamps
      t.references :category, foreign_key: true
    end
  end
end
