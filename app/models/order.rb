class Order < ActiveRecord::Base
	belongs_to :user
	has_many :orderdonuts
	has_many :donuts, through: :orderdonuts
	has_one :testimonial

	validates_presence_of :user_id
end
