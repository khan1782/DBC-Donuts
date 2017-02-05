get '/' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	@sample_testimonials = Testimonial.sample
  erb :index
end
