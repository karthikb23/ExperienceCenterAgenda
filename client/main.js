//import { Template } from 'meteor/templating';

import '../imports/api/collections.js';
import '../imports/ui/amdocs_navbar.js';
import '../imports/ui/content_body.js';
import '../imports/ui/agenda_item.js';
import '../imports/ui/agenda_body.js';

//-----------------------
//-- Subscribe to data --
//-----------------------

Template.body.onCreated(function () {
  //this.state = new ReactiveDict();
  Meteor.subscribe('visits');
  Meteor.subscribe('agenda');
  Meteor.subscribe('customers');
});

//----------------------
//-- Router Handlers --
//----------------------

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
//    this.layout('ApplicationLayout1');
  this.render('amdocs_navbar', {to: 'amdocs_navbar'});
  this.render('content_body', {to: 'main1'});
});

Router.route('/agenda.html', function () {
  this.subscribe('agenda').wait();

  // Use iron:router functionality to check if the collections are ready, since agenda.html
  // invokes a "click" event to intialize the tabs.
  if (this.ready()) {
    this.render('amdocs_navbar', {to:"amdocs_navbar"});
    this.render('agenda_body', {to:"main1"});
  } else {
    this.render('Loading');
  }
});
