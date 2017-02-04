class User < ActiveRecord::Base
	has_many :orders
	has_many :donuts, through: :orders
	has_many :testimonials, through: :orders
  has_many :wholesales, through: :orders

	def authenticated?(password)
    self.password == password
  end

  def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(new_password)
    @raw_password = new_password
    @password = BCrypt::Password.create(@raw_password)
    self.hashed_password = password
  end

end
