class Wholesale < ActiveRecord::Base
	has_many :orders
	has_many :donuts, through: :orders
	has_many :users, through: :orders
	has_many :testimonials, through: :orders

end
