$(document).ready(function() {


//login button
$("#nav-section").on("click",".login", function(event){
  $("#login-section").slideToggle();
});

//register button
$("#nav-section").on("click",".register", function(event){
  $("#registration-section").slideToggle();
});

//menu button
$("#nav-section").on("click",".menu", function(event) {
  $("#menu-section").slideToggle();
})

//order button
$("#nav-section").on("click",".order", function(event) {
  $("#order-section").slideToggle();
});


//admin-button
$("#nav-section").on("click",".admin", function(event) {
  $("#admin-section").slideToggle();
});

//profile click
$("nav-section").on("click", ".profile", function(event) {
  
}


//on click of submit of login form send post request and log person in
$("#login-section").on("submit", "form.login-form", function(event) {
  event.preventDefault()
  var data = $("form.login-form").serialize();
  $.ajax({
    url: '/sessions',
    type: 'POST',
    data: data
  }).done(function(response){
    $("#login-section").slideUp()
    $("div.nav-section").children("a.profile").show()
    $("div.nav-section").children("a.logout").show()
    $("div.nav-section").children("a.register").css("display","none")
    $("div.nav-section").children("a.login").css("display","none")
    $("div.banner-section").children("a#order-button").show()
  }).fail(function(error){
    //put what happens when they are not authorized
  });
});


// click on the order row for donut order form
$("#order-section").on("click", ".drop-down", function(event){
  event.preventDefault;
  var data = $(this).serialize()
  $.ajax({
    url: '/orders',
    type: 'POST',
    data: data
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    $("label#subtotal").html("subtotal: $" + orderDetails.subtotal)
    $("label#delivery").html("delivery: $" + orderDetails.delivery_cost)
    $("label#tax").html("tax: $" + orderDetails.tax)
    $("label#total").html("total: $" + orderDetails.total)
    $("#order-section").find("input.id").val(orderDetails.id)
  });
});




//click on the submit button of the order form 
$("#order-section").on("submit","form.order-form",function(event){
  event.preventDefault()
  $("#order-section").slideUp()
  $("#confirmation-section").slideDown();
  // var data = $("form#order-form").serialize() 
  var id = $(this).find("input.id").val()
  $.ajax({
    url:"/orders/" + id,
    type:"GET",
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    $("#confirmation-section").find("li.delivery-cost").html("Delivery: "+ orderDetails.delivery_cost);
    $("#confirmation-section").find("li.subtotal").html("Subtotal " + orderDetails.subtotal);
    $("#confirmation-section").find("li.tax").html("Tax: " + orderDetails.tax);
    $("#confirmation-section").find(".total").html("Total: " + orderDetails.total);
    $("#confirmation-section").find(".order-maker").html(orderDetails.user + "'s Order");
    $("#confirmation-section").find(".deadline").html("Will be available: " + orderDetails.deadline);
  });
});


//confirm on confirmation page
$("#confirmation-section").on("submit", "form.confirm-form", function(event) {
  event.preventDefault();
  $("#confirmation-section").slideUp();
  $("#confirmed-section").slideDown();
});



//confirmed notice click
$("#confirmed-section").on("click", function(event){
  event.preventDefault();
  $("#confirmed-section").slideToggle();
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