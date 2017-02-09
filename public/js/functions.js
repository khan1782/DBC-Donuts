
var loginNavOn = function(){
  $("#nav-section .login").hide();
  $("#nav-section .register").hide();
  $("#nav-section .profile").slideDown();
  $("#nav-section .logout").slideDown();
  $("#nav-section .order").slideDown();
  $("#nav-section .admin").slideDown();
};

var logoutNavOff = function(){
  $("#nav-section .profile").slideUp();
  $("#nav-section .logout").slideUp();
  $("#nav-section .order").slideUp();
  $("#nav-section .admin").slideUp();
  $("#nav-section .login").slideDown();
  $("#nav-section .register").slideDown();
};

var updateOrderDetails = function() {
  $("#confirmation-section").find("li.delivery-cost").html("Delivery: "+ orderDetails.delivery_cost);
  $("#confirmation-section").find("li.subtotal").html("Subtotal " + orderDetails.subtotal);
  $("#confirmation-section").find("li.tax").html("Tax: " + orderDetails.tax);
  $("#confirmation-section").find(".total").html("Total: " + orderDetails.total);
  $("#confirmation-section").find(".order-maker").html(orderDetails.user + "'s Order");
  $("#confirmation-section").find(".deadline").html("Will be available: " + orderDetails.deadline);
};



var loginFormSubmit = function() {
  var data = $("form.login-form").serialize();
  $.ajax({
    url: '/sessions',
    type: 'POST',
    data: data
  }).done(function(response){
    var userInfo = JSON.parse(response)
    loginNavOn();
    $("#nav-section .profile").text(userInfo.name)
    $("#nav-section .profile").attr({"name":userInfo.name}) 
    $("#login-section").slideUp();
  }).fail(function(error){
    $("#login-section").slideUp();
    $("#stop-section").slideDown();
  });
};


var orderRowSelection = function(dropDownTag) {
  var data = $(dropDownTag).serialize()
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
};


var orderFormSubmit = function(formTag){
  $("#order-section").slideUp()
  $("#confirmation-section").slideDown();
  // var data = $("form#order-form").serialize() 
  var id = $(formTag).find("input.id").val()
  $.ajax({
    url:"/orders/" + id,
    type:"GET",
  }).done(function(response){
    var orderDetails =JSON.parse(response)
  });
}