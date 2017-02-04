class CreateMenuitems < ActiveRecord::Migration
  def change
  	create_table :menuitems do |t|
  		t.string :donut_type, {null: false}
  		t.integer :price, {null: false}
  		t.timestamps
  	end
  end
end
