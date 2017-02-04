class CreateDonutshops < ActiveRecord::Migration
  def change
  	create_table :donutshops do |t|
  		t.string :name, {null: false}
  		t.timestamps
  	end
  end
end
