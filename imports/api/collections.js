import { Mongo } from 'meteor/mongo';

export const Visits = new Mongo.Collection('visits');
export const Agenda = new Mongo.Collection('agenda');
export const Customers = new Mongo.Collection('customers');

console.log("Created collections");

// Publish collections
if (Meteor.isServer) {
  // This code only runs on the server
  console.log("Running collections on Server - about to publish");

  Meteor.publish('visits', function() {
    return Visits.find();
  });

  Meteor.publish('agenda', function() {
    return Agenda.find();
  });

  Meteor.publish('customers', function() {
    return Customers.find();
  });
}
