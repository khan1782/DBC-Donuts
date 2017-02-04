class CreateWholesales < ActiveRecord::Migration
  def change
  	create_table :wholesales do |t|
  		t.datetime :deadline, {null: false}
  		t.string :donutshop_id
  		t.integer :delivery_cost
  		t.timestamps
  	end
  end
end
