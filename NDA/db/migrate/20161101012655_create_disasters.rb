class CreateDisasters < ActiveRecord::Migration[5.0]
  def change
    create_table :disasters do |t|
      t.string :title
      t.text :description
      t.text :preperation
      t.string :photo_url
      t.references :category, foreign_key: true

      t.timestamps null: false
    end
  end
end
