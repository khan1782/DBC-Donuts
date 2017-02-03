class CreateOrderdonuts < ActiveRecord::Migration
   def change
  	create_table :orderdonuts do |t|
  		t.integer :donut_id, {null: false}
  		t.integer :order_id, {null: false}
  		t.timestamps
  	end	
  end
end
