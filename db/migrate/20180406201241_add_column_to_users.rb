class AddColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :screen_name, :string
    add_column :users, :city, :string
    add_column :users, :img_url, :string
    add_column :users, :pronouns, :string
    add_column :users, :age, :integer
    add_column :users, :bio, :text
    add_column :users, :first_date_idea, :text

    add_index :users, :screen_name
    add_index :users, :city
  end
end
