class User < ActiveRecord::Base
  has_many :orders
  has_many :testimonials
  has_many :donutorders, through: :orders
  has_many :donuts, through: :donutorders

  validates_uniqueness_of :email
  validates_presence_of :first_name, :last_name, :email, :hashed_password

  def self.authenticate(email, password)
    user = User.find_by(email: email)
    return user if user && user.password == password
  end

  def password
    @password ||= Password.new(hashed_password)
  end

  def password=(new_password)
    password = BCrypt::Password.create(new_password)
    self.hashed_password = password
  end
end
