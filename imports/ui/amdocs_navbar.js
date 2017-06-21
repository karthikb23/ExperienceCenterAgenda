//import { Template } from 'meteor/templating';
import './amdocs_navbar.html';

Template.amdocs_navbar.events({
  // Handle clicks to the navbar items - remove "active" bootstrap class from
  // all navbar items and set "active" class on the element that was clicked.
  "click .nav li": function(event) {
    $(".nav li").removeClass("active");
    console.log(event.target);
    $(event.target).parent().addClass("active");

    // Close the hamburger menu - in case the click was triggered from this menu
    $('#doxNavbar').collapse('hide');
  },

  "click .navbar-left .mybrand": function(event) {
    console.log("Clicked brand");
    $(".nav li").removeClass("active");
    $('#navbarHome').addClass("active");
  }
});
