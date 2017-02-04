class Testimonial < ActiveRecord::Base
	belongs_to :order
	has_many :donuts, through: :order
end
