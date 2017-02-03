class Order < ActiveRecord::Base
	belongs_to :user
	has_many :donutorders
	has_many :donuts, through: :donutorders
	has_one :testimonial

	validates_presence_of :user_id
end
