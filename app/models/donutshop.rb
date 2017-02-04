class Donutshop < ActiveRecord::Base
	has_many :wholesales
	has_many :orders, through: :wholesales
	has_many :menuitems
end
