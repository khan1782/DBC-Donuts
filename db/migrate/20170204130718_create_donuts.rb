class CreateDonuts < ActiveRecord::Migration
  def change
  	create_table :donuts do |t|
  		t.string :donut_type, {null: false}
  		t.integer :price, {null: false}
  		t.integer :order_id, {null: false}
  		t.timestamps
  	end	
  end
end
