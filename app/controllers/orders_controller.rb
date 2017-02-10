get '/orders/new' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	erb :'orders/view'
end


post '/orders' do 

	current_wholesale = Wholesale.last
	current_order = Order.find_or_create_by(user_id:session[:user_id],wholesale_id:current_wholesale.id)
	current_order.add(params[:donut])
		{
			id: 					 current_order.id.to_s, 
			subtotal: 		 money(current_order.subtotal),
			delivery_cost: money(current_order.delivery_cost),
			tax: 					 money(current_order.tax),
			total: 				 money(current_order.total),
			# user:  				 "Kevin"#current_user.first_name
			}.to_json
end

get '/orders/:order_id' do
	@current_order = Order.find_by_id(params[:order_id])
	erb :'/orders/single'
end

put '/orders/:order_id' do
	current_wholesale = Wholesale.last
	current_order = Order.find_by_id(params[:order_id])

	{
			id: 					 current_order.id.to_s, 
			subtotal: 		 money(current_order.subtotal),
			delivery_cost: money(current_order.delivery_cost),
			tax: 					 money(current_order.tax),
			total: 				 money(current_order.total),
			user:  				 "Kevin",#current_user.first_name,
			deadline:  		 standard_datetime(current_wholesale.deadline)

	}.to_json 
end
