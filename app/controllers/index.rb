get '/' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	@sample_testimonials = Testimonial.sample
	@current_wholesale = Wholesale.last
  erb :index
end
