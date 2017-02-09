$(document).ready(function() {

  $("#nav-section").children().css('cursor','pointer')
  $("#confirmed-section").css('cursor','pointer')
    $("#stop-section").css('cursor','pointer')



  //nav-section login click
  $("#nav-section").on("click",".login", function(event){
    $("#login-section").slideToggle();
  });

  //nav-section register click
  $("#nav-section").on("click",".register", function(event){
    $("#registration-section").slideToggle();
  });

  //nav-section menu click
  $("#nav-section").on("click",".menu", function(event) {
    $("#menu-section").slideToggle();
  })

  //nav-section order click
  $("#nav-section").on("click",".order", function(event) {
    $("#order-section").slideToggle();
  });

  //nav-section admin click
  $("#nav-section").on("click",".admin", function(event) {
    $("#admin-section").slideToggle();
  });

  //nav-section profile click
  $("#nav-section").on("click", ".profile", function(event) {
      $("#profile-section").slideToggle(); 
  });

  //nav-section logout click
  $("#nav-section").on("click", ".logout", function(event){
    logoutNavOff()
  });


///////////////////////login form////////////////////////////////////////////////////

//login-section form submit
$("#login-section").on("submit", "form.login-form", function(event) {
  event.preventDefault();
  loginFormSubmit();
});


///////////////////////register form////////////////////////////////////////////////////

//registration-section form submit
$("#registration-section").on("submit", "form.registration-form", function(event){
  event.preventDefault();
  registrationFormSubmit();
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











//on click of confirmation submit button
$("div.confirmation-section").on("click","input.order-confirmation", function(event){
  event.preventDefault();
  $("#confirmation-section").slideUp();
  $("#confirmed-section").slideDown();
});




//confirmed notice click
$("#confirmed-section").on("click", function(event){
  event.preventDefault();
  $("#confirmed-section").slideToggle();
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


