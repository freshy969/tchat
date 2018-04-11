class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id
      t.integer :receiver_id
      t.integer :message_thread_id
      t.text :message

      t.timestamps
    end

    add_index :messages, :sender_id
    add_index :messages, :receiver_id
    add_index :messages, :message_thread_id
  end
end
