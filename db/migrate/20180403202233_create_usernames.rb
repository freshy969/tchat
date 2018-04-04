class CreateUsernames < ActiveRecord::Migration[5.1]
  def change
    create_table :usernames do |t|
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
