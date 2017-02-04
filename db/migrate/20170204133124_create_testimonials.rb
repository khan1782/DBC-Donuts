class CreateTestimonials < ActiveRecord::Migration
  def change
  	create_table :testimonials do |t|
  		t.string :body, {null: false}
  		t.integer :order_id, {null: false}
  		t.timestamps
  	end
  end
end
