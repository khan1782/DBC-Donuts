post '/donutshop' do 
	donutshoppe = Donutshop.find_or_create_by(name: params["donutshop"])
	@new_items = Array.new
	menuitem_length = params.length - 1
	menuitem_length.times do |i| 
		new_menu_item = donutshoppe.menuitems.new(params["#{i}"])
		new_menu_item.donutshop_id = donutshoppe.id
		new_menu_item.save
		@new_items << new_menu_item
	end


	erb :_neworderrow, layout: false
end