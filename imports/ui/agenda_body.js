import { Mongo } from 'meteor/mongo';

import { Visits } from '../api/collections.js';
import { Agenda } from '../api/collections.js';

//import { Visits } from '../../lib/collections.js';
//import { Agenda } from '../../lib/collections.js';

import './agenda_body.html';

Template.agenda_body.helpers({
  days: function() {
    var noOfDays = Visits.findOne({customerId: 2}).noOfDays;
    //var noOfDays = 4;
    var days = [];

    for(i=0; i<noOfDays; i++) {
      days[i] = i+1;
    }

    return days;
  },

  agendaItems: function(day) {
    //console.log("Received day: ", day);
    var agendaItems = Agenda.find({customerId: 2, day: day});

    return agendaItems;
  }
});

Template.agenda_body.events({
  // Handle clicks to the navbar items - remove "active" bootstrap class from
  // all navbar items and set "active" class on the element that was clicked.
  "click .nav-tabs li": function(event) {
    $(".nav-tabs li").removeClass("active");
    $(event.target).parent().addClass("active");
  },

  "click .day-selector": function(event) {
    var dayNum = $(event.target).attr('data-number');
    //console.log($(event.target).attr('data-number'));

    // Get all elements with classname "panel"
    var tabContent = $(".panel");
    for(i=0; i<tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    var selector = $(".menu" + dayNum);
    //console.log(selector.length);

    for(i=0; i<selector.length; i++) {
      selector[i].style.display = "block";
    }
  }
});

Template.agenda_body.onRendered(function() {
  //$(".nav-tabs li.active").trigger("click");
  $(".nav-tabs li.active .day-selector").trigger("click");
  console.log("Rendered!");
});
