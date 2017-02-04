	class Order < ActiveRecord::Base
	has_many :donuts 
	belongs_to :user
	has_one :testimonial
	belongs_to :wholesale

	validates_uniqueness_of :user_id, scope: :wholesale_id, :message => "Cannot have more than one order per person. Please edit existing order." 


	def subtotal
		 self.donuts.reduce(0) {|sum,donut| sum+donut.price}
	end

	def delivery_cost
		total_orders_count = self.wholesale.orders.count.to_f
		total_delivery_cost = self.wholesale.delivery_cost.to_f
		(total_delivery_cost/total_orders_count).to_f
	end
end
