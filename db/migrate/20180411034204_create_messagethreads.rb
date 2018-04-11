class CreateMessagethreads < ActiveRecord::Migration[5.1]
  def change
    create_table :messagethreads do |t|
      t.integer :initiator_id
      t.integer :receiver_id

      t.timestamps
    end

    add_index :messagethreads, :initiator_id
    add_index :messagethreads, :receiver_id
    add_index :messagethreads, [:initiator_id, :receiver_id], unique: true
  end
end
