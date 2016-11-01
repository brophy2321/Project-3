class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :commenter
      t.text :body
      t.references :disaster, foreign_key: true

      t.timestamps null: false
    end
  end
end
