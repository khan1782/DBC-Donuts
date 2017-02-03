User.create([
{first_name:"kevin",last_name:"han",email:"khan1782@gmail.com",hashed_password:BCrypt::Password.create('password')},
{first_name:"savance",last_name:"x",email:"savance@gmail.com",hashed_password:BCrypt::Password.create('password')},
{first_name:"joe",last_name:"schmoe",email:"joe@gmail.com",hashed_password:BCrypt::Password.create('password')}
])


Donut.create([
	{donut_type:"Glazed",price:3},
	{donut_type:"Pistachio",price:3.5},
	{donut_type:"Chocolate-Glazed",price:3},
	{donut_type:"Jelly-Filled",price:3.25},
	{donut_type:"Plain",price:2.50},
	{donut_type:"Custard-Filled",price:3.25}
])


Order.create([
	{user_id:1},
	{user_id:2},
	{user_id:3},
	{user_id:1}
])

Orderdonut.create([
	{donut_id:1,order_id:1},
	{donut_id:1,order_id:1},
	{donut_id:2,order_id:2},
	{donut_id:3,order_id:2},
	{donut_id:4,order_id:3},
	{donut_id:5,order_id:3},
	{donut_id:6,order_id:2},
	{donut_id:1,order_id:4},
	{donut_id:2,order_id:4},
	{donut_id:3,order_id:4}
])

Testimonial.create([
	{user_id:1,order_id:1,body:"Most delicious donut ever. Thanks DBC donuts!"},
	{user_id:2,order_id:2,body:"Bad experience, wont be coming back"},
	{user_id:3,order_id:3,body:"Donuts are great!"},
	{user_id:1,order_id:1,body:"I will be ordering. EVERYDAY."},

])