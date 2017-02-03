class Donut < ActiveRecord::Base
	has_many :orderdonuts
	has_many :orders, through: :orderdonuts
	has_many :users, through: :orders
	has_many :testimonials, through: :orders

	validates_uniqueness_of :donut_type
	validates_presence_of :donut_type, :price
end
