get '/donutshop/:donutshop_id/menuitems' do 
	@current_donutshop = Donutshop.find_by_current_shop("true")
	erb :'menuitems/index'
end