class UpdatePins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :content, :text
  end
end
