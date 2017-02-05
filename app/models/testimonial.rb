class Testimonial < ActiveRecord::Base
	belongs_to :order
	has_many :donuts, through: :order

	def self.sample
		Testimonial.all[-5..-1].sample(3)
	end

	def author
		User.find_by_id(self.order.user_id).first_nameg
	end

end
