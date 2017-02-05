	class Order < ActiveRecord::Base
	has_many :donuts 
	belongs_to :user
	has_one :testimonial
	belongs_to :wholesale

	validates_uniqueness_of :user_id, scope: :wholesale_id, :message => "Cannot have more than one order per person. Please edit existing order." 


	def subtotal
		 self.donuts.reduce(0) {|sum,donut| sum+donut.price.to_f}.to_f
	end

	def delivery_cost
		total_orders_count = self.wholesale.orders.count.to_f
		total_delivery_cost = self.wholesale.delivery_cost.to_f
		(total_delivery_cost/total_orders_count).to_f
	end

	def tax
		self.subtotal.to_f * 0.1
	end

	def total
		self.subtotal + self.delivery_cost + self.tax
	end

	def add(donut_array) 
		price = Menuitem.find_by(item_type: donut_array[0]).price
		donut_array[1].to_i.times do 
			Donut.create(donut_type: donut_array[0], price: price, order_id: self.id)
		end
	end
end
