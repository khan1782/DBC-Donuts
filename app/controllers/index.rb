get '/' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	
  erb :index
end
