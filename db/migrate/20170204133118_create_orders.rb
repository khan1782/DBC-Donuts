class CreateOrders < ActiveRecord::Migration
  def change
  	create_table :orders do |t|
  		t.integer :user_id, {null: false}
  		t.integer :wholesale_id, {null: false}
      t.boolean :confirmed
  		t.timestamps
  	end
  end
end
