class Orderdonut < ActiveRecord::Base
	belongs_to :donut
	belongs_to :order
	has_many :users, through: :orders
	has_many :testimonials, through: :orders

	validates_presence_of :donut_id, :order_id
end
