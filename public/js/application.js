$(document).ready(function() {

// //on register button 'click' present form
// $(".login-nav").on("click","a#register", function(event){
// 	event.preventDefault();
//   console.log("clicked")
//   $.ajax({
//     url: '/users/new',
//     type: "GET"
//   }).done(function(response){
//     //get back an erb string and append to the login-nav class
//       $(".login-nav").append(response);
//     });
// });


// on submit of registration form send post request and remove form
// $("section.login-nav").on("click","form.new-user-form input[type=submit]", function(event){
// 	event.preventDefault();
//   //grab data from registration form that was just sent out
// 	var data = $(".new-user-form").serialize();
//   console.log("clicked the registration form")
//   //set up ajax POST for creating new user
// 	$.ajax({
// 		url: '/users',
// 		type: "POST",
// 		data: data
// 	}).done(function(response){
//     $("section.login-nav").append(response);
//     $("a#login").hide();
//     $("span.index-links").append("<a id='order-button' href='/orders/new'>Order now</a>");
//   });
// 	$(".registration").remove();
// });

// //on click of logout button that was added after registration
// $("section.login-nav").on("click","a#logout", function(event){
//   event.preventDefault()
//   $.ajax({
//     url: '/sessions',
//     type: "DELETE"
//   })
//   $("section.dynamic-login-nav").remove()
//   /////////////////////////////////////////////////////////////////
// });

//on click of login button
$("div.nav-section").on("click","a.login", function(event){
  event.preventDefault();
  $("div.login-section").slideDown()
});


//on click of submit of login form send post request and log person in
$("div.login-section").on("click", "input.login-button", function(event) {
  event.preventDefault()
  var data = $("form.login-form").serialize();
  $.ajax({
  	url: '/sessions',
  	type: 'POST',
  	data: data
  }).done(function(response){
    $("div.login-section").slideUp()
    $("div.nav-section").children("a.profile").show()
    $("div.nav-section").children("a.logout").show()
    $("div.nav-section").children("a.register").css("display","none")
    $("div.nav-section").children("a.login").css("display","none")
    $("div.banner-section").children("a#order-button").show()
  }).fail(function(error){
    //put what happens when they are not authorized
  });


});

//click on the order button on home page
$("div.banner-section").on("click", "a#order-button", function(event){
  event.preventDefault();
  $("div.order-section").slideDown();
});


// click on the order row for donut order form
$("div.order-row").on("click", "select", function(event){
  event.preventDefault;
  var data = $(this).serialize()
  $.ajax({
    url: '/orders',
    type: 'POST',
    data: data
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    $("label.subtotal").html("subtotal: $" + orderDetails.subtotal)
    $("label.delivery").html("delivery: $" + orderDetails.delivery_cost)
    $("label.tax").html("tax: $" + orderDetails.tax)
    $("label.total").html("total: $" + orderDetails.total)
    $("div.order-section").find("input.id").val(orderDetails.id)
  });
});



//click on the submit button of the order form 
$(".order-section").on("click","#submit-unconfirmed",function(event){
  event.preventDefault()
  console.log("AD")
  $("div.order-section").slideUp()
  $("div.confirmation-section").slideDown();
  // var data = $("form#order-form").serialize() 
  var id = $(this).siblings("input.id").val()
  $.ajax({
    url:"/orders/" + id,
    type:"GET",
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    $("div.confirmation-section").find("li.delivery-cost").append(orderDetails.delivery_cost);
    $("div.confirmation-section").find("li.subtotal").append(orderDetails.subtotal);
    $("div.confirmation-section").find("li.tax").append(orderDetails.tax);
    $("div.confirmation-section").find(".total").append(orderDetails.total);
    $("div.confirmation-section").find(".order-maker").append(orderDetails.user + "'s Order");
    $("div.confirmation-section").find(".deadline").append(orderDetails.deadline);
  });
});

//on click of confirmation submit button
$("div.confirmation-section").on("click","input.order-confirmation", function(event){
  event.preventDefault();
  $("div.confirmation-section").slideUp();
  $("div.confirmed-section").slideDown();
});


//click of "order has been confirmed" container
$("div.confirmed-section").on("click", function(event){
  $("div.confirmed-section").slideUp();
})


});

var Order = function(id){
  this.id = id
  this.subtotal = null
  this.delivery_cost = null
  this.tax = null
  this.total = null
}



// });