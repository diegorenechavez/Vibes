class AddPinsCollumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :user_id, :integer
  end
end
