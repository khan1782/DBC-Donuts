class CreateDonuts < ActiveRecord::Migration
  def change
  	create_table :donuts do |t|
  		t.string :type, {null: false}
  		t.integer :price, {null: false}

  		t.timestamps
  	end
  end
end
