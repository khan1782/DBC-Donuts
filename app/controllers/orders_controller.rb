get '/orders' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	erb :'orders/view'
end