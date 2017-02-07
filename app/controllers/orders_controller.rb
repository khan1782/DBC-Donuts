get '/orders/new' do
	@current_donutshop = Donutshop.find_by_current_shop("true")
	erb :'orders/view'
end


post '/orders' do 

	# @current_donutshop = Donutshop.find_by_current_shop("true")
	# current_wholesale = Wholesale.last
	# current_order 		=	Order.new(user_id: session[:user_id], wholesale_id: current_wholesale.id)

	# if current_order.save
	# 	params["donut"].each {|donut| current_order.add(donut)}
		redirect '/'
	# else
	# 	@errors = current_order.errors.full_messages
	# 	erb :'menuitems/index'
	# end
end