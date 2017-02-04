#Users
User.create([
{first_name:"kevin",last_name:"han",email:"kevin@kevin.com",password:"password"},
{first_name:"Eric",last_name:"Bauchman",email:"eric@eric.com",password:"password"},
{first_name:"Jin",last_name:"Yang",email:"jin@jin.com",password:"password"},
{first_name:"Richard",last_name:"Hendricks",email:"richard@richard.com",password:"password"}
])

#Orders
Order.create([
	{user_id:1},
	{user_id:1},
	{user_id:2},
	{user_id:3},
	{user_id:4}
])

#Donuts
Donut.create([
	{donut_type:"Pistachio", price:3.25, order_id:1},
	{donut_type:"Glazed", price:3, order_id:1},
	{donut_type:"Glazed", price:3, order_id:2},
	{donut_type:"Glazed", price:3, order_id:2},
	{donut_type:"Custard filled", price:3.15, order_id:2},
	{donut_type:"Glazed", price:3, order_id:3},
	{donut_type:"Pistachio", price:3.25, order_id:4},
	{donut_type:"Glazed", price:3, order_id:4},
	{donut_type:"Chocolate", price:3, order_id:4},
	{donut_type:"Jelly filled", price:3.15, order_id:5},
	{donut_type:"Glazed", price:3, order_id:5},
])

#user testimonials
Testimonial.create([
	{body:"The pistachio donut is very delicious",order_id:1},
	{body:"Best donut I've ever had. Will be back 10 for 10",order_id:2},
	{body:"Custard at this place is pretty dank",order_id:3},
	{body:"I like eh the glazed very much",order_id:4},
	{body:"The jelly tastes home made. We should go back here",order_id:5}
])