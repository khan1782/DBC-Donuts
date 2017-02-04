class Order < ActiveRecord::Base
	has_many :donuts 
	belongs_to :user
	has_one :testimonial
end
