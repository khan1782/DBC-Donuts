$(document).ready(function() {

//on register button 'click' present form
$(".login-nav").on("click","a#register", function(event){
	event.preventDefault();
  console.log("clicked")
  $.ajax({
    url: '/users/new',
    type: "GET"
  }).done(function(response){
    //get back an erb string and append to the login-nav class
      $(".login-nav").append(response);
    });
});


//on submit of registration form send post request and remove form
$("section.login-nav").on("click","form.new-user-form input[type=submit]", function(event){
	event.preventDefault();
  //grab data from registration form that was just sent out
	var data = $(".new-user-form").serialize();
  console.log("clicked the registration form")
  //set up ajax POST for creating new user
	$.ajax({
		url: '/users',
		type: "POST",
		data: data
	}).done(function(response){
    $("section.login-nav").append(response);
    $("a#login").hide();
    $("span.index-links").append("<a href='/orders/new'>Order now</a>");
  });
	$(".registration").remove();
});

//on click of logout button that was added after registration
$("section.login-nav").on("click","a#logout", function(event){
  event.preventDefault()

  $.ajax({
    url: '/sessions',
    type: "DELETE"
  })

  $("section.dynamic-login-nav").remove()
});

//on click of login button
$("section.login-nav").on("click","a#login", function(event){
  event.preventDefault();

  $.ajax({
    url: '/sessions/new',
    type: 'GET'
  }).done(function(response){
      $("div.nav").append(response);
      // $("a#login").remove()
  });


});


//on click of submit of login form send post request and log person in
$("div.nav").on("click", "input#login-button", function(event) {
  event.preventDefault()
  console.log("clicked!!!!!")
  var form = $("form.login-form").serialize();
  $.ajax({
  	url: '/sessions',
  	type: 'POST',
  	data: form
  }).done(function(response){
    $("a#login").hide()
  	$("section.login-nav").append(response);
    $("span.index-links").append("<a href='/orders/new'>Order now</a>");
  });
  $("container.login").remove();

});

$("div.order-row").on("click", "select", function(event){
  event.preventDefault;
  var data = $(this).serialize()
  $.ajax({
    url: '/orders',
    type: 'POST',
    data: data
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    console.log("delivery_cost: $" + orderDetails.delivery_cost)
    $("label.subtotal").html("subtotal: $" + orderDetails.subtotal)
    $("label.delivery").html("delivery: $" + orderDetails.delivery_cost)
    $("label.tax").html("tax: $" + orderDetails.tax)
    $("label.total").html("total: $" + orderDetails.total)

  });
});

});




// });