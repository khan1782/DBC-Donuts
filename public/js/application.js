$(document).ready(function() {

  $("#nav-section").children().css('cursor','pointer')
  $("#confirmed-section").css('cursor','pointer')


  //login click
  $("#nav-section").on("click",".login", function(event){
    $("#login-section").slideToggle();
  });

  //register click
  $("#nav-section").on("click",".register", function(event){
    $("#registration-section").slideToggle();
  });

  //menu click
  $("#nav-section").on("click",".menu", function(event) {
    $("#menu-section").slideToggle();
  })

  //order click
  $("#nav-section").on("click",".order", function(event) {
    $("#order-section").slideToggle();
  });

  //admin click
  $("#nav-section").on("click",".admin", function(event) {
    $("#admin-section").slideToggle();
  });

  //profile click
  $("#nav-section").on("click", ".profile", function(event) {
      $("#profile-section").slideToggle(); 
  });

  //logout click
  $("#nav-section").on("click", ".logout", function(event){
    logoutNavOff()
  });


//on click of submit of login form send post request and log person in
$("#login-section").on("submit", "form.login-form", function(event) {
  event.preventDefault();
  loginFormSubmit();
});


// click on the order row for donut order form
$("#order-section").on("click", ".drop-down", function(event){
  orderRowSelection(this)
});




//click on the submit button of the order form 
$("#order-section").on("submit","form.order-form",function(event){
  event.preventDefault();
  orderFormSubmit(this);
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
  $("#confirmation-section").slideUp();
  $("#confirmed-section").slideDown();
});


//click of "order has been confirmed" container
$("#confirmed-section").on("click", function(event){
  $("#confirmed-section").slideUp();
});

//click stop sign
$("#stop-section").on("click", function(event){
  $("#stop-section").slideUp()
  $("#login-section").slideDown()
});


});


