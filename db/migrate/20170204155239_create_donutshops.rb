class CreateDonutshops < ActiveRecord::Migration
  def change
  	create_table :donutshops do |t|
  		t.string :name, {null: false}
  		t.boolean :current_shop
  		t.timestamps
  	end
  end
end
