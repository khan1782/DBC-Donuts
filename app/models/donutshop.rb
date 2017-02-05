class Donutshop < ActiveRecord::Base
	has_many :wholesales
	has_many :orders, through: :wholesales
	has_many :menuitems

	validates_uniqueness_of :current_shop, if: :current_shop, :message => "Only one shop's menu can be shown at a time" 


end
