class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string  :title
      t.string  :description
      t.json    :payload
      t.timestamps
    end
  end
end
