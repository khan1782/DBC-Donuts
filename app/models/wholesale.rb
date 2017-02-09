class Wholesale < ActiveRecord::Base
	has_many :orders
	has_many :donuts, through: :orders
	has_many :users, through: :orders
	has_many :testimonials, through: :orders
	belongs_to :donutshop	

	def confirmed_orders
			self.orders.select {|order| order.confirmed==true}
	end

end
