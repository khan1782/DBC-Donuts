class Donut < ActiveRecord::Base
	has_many :donutorders
	has_many :orders, through: :donutorders
	has_many :users, through: :orders
	has_many :testimonials, through: :orders

	validates_uniqueness_of :type
	validates_presence_of :type, :price
end
