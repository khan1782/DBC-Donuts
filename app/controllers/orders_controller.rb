get '/orders/new' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	erb :'orders/view'
end


post '/orders' do 
	session[:user_id] = rand(999999999)
	# @current_donutshop = Donutshop.find_by_current_shop("true")
	current_wholesale = Wholesale.last
	current_order =	Order.create(
		user_id: session[:user_id],
		wholesale_id: current_wholesale.id,
		confirmed: false
		)
	current_order.add(params[:donut])

	 ############################
	 puts "*" * `tput cols`.chomp.to_i
	 puts ""
	 puts ""
	 puts "-" * (((`tput cols`.chomp.to_i)/2)-10) + "LOOK OVER HERE" + "-" * (((`tput cols`.chomp.to_i)/2)-10)
	 puts ""
	 p params
	 puts ""
	 puts "-" * `tput cols`.chomp.to_i
	 puts ""
	 puts ""
	 puts "*" * `tput cols`.chomp.to_i
	 ############################
	 
	 
	if request.xhr?
		{
			subtotal: 		 money(current_order.subtotal),
			delivery_cost: money(current_order.delivery_cost),
			tax: 					 money(current_order.tax),
			total: 				 money(current_order.total)
			}.to_json
	end
end