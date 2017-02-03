class Testimonial < ActiveRecord::Base
	 belongs_to :user
	 belongs_to :order

	 validates_presence_of :user_id, :order_id
	 validates_uniqueness_of :body

end
