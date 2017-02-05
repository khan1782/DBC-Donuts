get '/donutshop/:donutshop_id/menuitems' do 
	@current_donutshop = Donutshop.find_by_current_shop("true")
	erb :'menuitems/index'
end

post '/donutshop/:donutshop_id/menuitems' do 
	session[:user_id] = 11
		@current_donutshop = Donutshop.find_by_current_shop("true")

	current_wholesale = Wholesale.last
	current_order 		=	Order.new(user_id: session[:user_id], wholesale_id: current_wholesale.id)

	if current_order.save
		params["donut"].each do |donut|
				current_order.add(donut)
		end
		Donut.count.to_s
	else
		@errors = current_order.errors.full_messages
		erb :'menuitems/index'
	end
end