requestProfile = function(userHash) {
  $.ajax({
    url: '/users/' + userHash.id,
    type: 'GET'
  }).done(function(response){
    $("#profile-section").html(response);
  });
};

updateProfile = function(orderId) { //$("input.id").val()
  $.ajax({
    url:'/orders/' + orderId,
    type: 'GET'
  }).done(function(response){
    $("#profile-section").append(response);
  });
};

var logoutSubmit = function() {
  $.ajax({
    url: '/sessions',
    type: 'DELETE'
  });
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
    updateProfileTag(userInfo);
    $("#profile-section").html(userInfo.profile);
    user.id = userInfo.id
  }).fail(function(error){
    $("#login-section").slideUp();
    $("#stop-section").slideDown();
  });
};

var registrationFormSubmit = function() {
  var data = $("form.registration-form").serialize()
  var admin = $("form.registration-form").serializeArray()[5].value

  if (admin == "moooo") {
    $.ajax({
      url: '/admins',
      type: 'POST',
      data: data
    }).done(function(response){
      var userInfo = JSON.parse(response);
      $("#nav-section .admin").slideDown();
      loginNavOn();
    });
  } else {
    $.ajax({
      url:'/users',
      type:'POST',
      data: data
    }).done(function(response){
      var userInfo = JSON.parse(response)
      loginNavOn();
    }).fail(function(error){
      $("#login-section").slideUp();
      $("#stop-section").slideDown();
    });
  }
};


var orderRowSelection = function(dropDownTag) {
  var data = $(dropDownTag).serialize()
  $.ajax({
    url: '/orders',
    type: 'POST',
    data: data
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    updateRunningTotal(orderDetails)
  }).fail(function(error){

  });
};


var orderFormSubmit = function(formTag){
  $("#order-section").slideUp()
  $("#confirmation-section").slideDown();
  var id = $(formTag).find("input.id").val()
  $.ajax({
    url:"/orders/" + id,
    type:"PUT",
  }).done(function(response){
    var orderDetails =JSON.parse(response)
    updateConfirmed(orderDetails)
  }).fail(function(response){

  });
};

var wholesaleFormSubmit = function(data){
  $.ajax({
    url: "/donutshop",
    type: "POST",
    data: data
  }).done(function(response){
    //update some list of donut shops somewhere
    $("#order-form-table").append(response)
  });
};


var confirmationSubmit = function(formTag){
  updateProfile($("input.id").val())
}

var updateConfirmed = function(orderDetails) {
  var $confSection = $("#confirmation-section")
  $confSection.find("li.delivery-cost").html("Delivery: "+ orderDetails.delivery_cost);
  $confSection.find("li.subtotal").html("Subtotal " + orderDetails.subtotal);
  $confSection.find("li.tax").html("Tax: " + orderDetails.tax);
  $confSection.find(".total").html("Total: " + orderDetails.total);
  $confSection.find(".order-maker").html(orderDetails.user + "'s Order");
  $confSection.find(".deadline").html("Will be available: " + orderDetails.deadline);
};

var updateRunningTotal = function(orderDetails) {
  $("label#subtotal").html("subtotal: $" + orderDetails.subtotal)
  $("label#delivery").html("delivery: $" + orderDetails.delivery_cost)
  $("label#tax").html("tax: $" + orderDetails.tax)
  $("label#total").html("total: $" + orderDetails.total)
  $("#order-section").find("input.id").val(orderDetails.id)
}


var loginNavOn = function(){
  $("#nav-section .login").hide();
  $("#nav-section .register").hide();
  $("#nav-section .profile").slideDown();
  $("#nav-section .logout").slideDown();
  $("#nav-section .order").slideDown();
};

var logoutNavOff = function(){
  $("#nav-section .profile").slideUp();
  $("#nav-section .logout").slideUp();
  $("#nav-section .order").slideUp();
  $("#nav-section .admin").slideUp();
  $("#nav-section .login").slideDown();
  $("#nav-section .register").slideDown();
};



var updateProfileTag = function(userHash) {
  $("#nav-section .profile").text(userHash.name);
};