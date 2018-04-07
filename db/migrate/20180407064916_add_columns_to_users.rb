class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :my_aesthetic, :string
    add_column :users, :my_anthem, :string
    add_column :users, :hobbies, :string
    add_column :users, :looking_for, :string
  end
end
