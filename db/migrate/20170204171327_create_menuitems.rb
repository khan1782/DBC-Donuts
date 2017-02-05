class CreateMenuitems < ActiveRecord::Migration
  def change
  	create_table :menuitems do |t|
  		t.string :item_type, {null: false}
  		t.integer :price, {null: false}
  		t.integer :donutshop_id, {null: false}
  		t.timestamps
  	end
  end
end
