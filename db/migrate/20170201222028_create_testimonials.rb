class CreateTestimonials < ActiveRecord::Migration
  def change
  	create_table :testimonials do |t|
  		t.integer :user_id, {null: false}
  		t.integer :order_id, {null: false}
  		t.text :body, {null: false}
  		t.timestamps
  	end
  end
end
