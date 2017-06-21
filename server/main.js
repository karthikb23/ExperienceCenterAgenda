import '../imports/api/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  /*
  console.log("Running startup code");

  if(!Visits.findOne()){
    console.log("No visits yet. Creating starter data.");
    Visits.insert({
      customerId: 1,
      description: "This is the first visit.",
      noOfDays: 2
    });
    Visits.insert({
      customerId: 2,
      description: "This is the second visit.",
      noOfDays: 3
    });
    Visits.insert({
      customerId: 3,
      description: "This is the third visit.",
      noOfDays: 5
    });
  }
  if(!Agenda.findOne()){
    console.log("No agenda yet. Creating starter data.");
    Agenda.insert({
      day: 1,
      date: new Date(),
      topic: "Day 1 Topic 1",
      description: "Description for Topic 1",
      customerId: 2,
      presenterId: 1
    });
    Agenda.insert({
      day: 1,
      date: new Date(),
      topic: "Day 1 Topic 2",
      description: "Description for Topic 2",
      customerId: 2,
      presenterId: 2
    });
    Agenda.insert({
      day: 2,
      date: new Date(),
      topic: "Day 2 Topic 1",
      description: "Description for Topic 1",
      customerId: 2,
      presenterId: 2
    });
    Agenda.insert({
      day: 2,
      date: new Date(),
      topic: "Day 2 Topic 2",
      description: "Description for Topic 2",
      customerId: 2,
      presenterId: 1
    });
  }
  if(!Customers.findOne()){
    console.log("No customers yet. Creating starter data.");
    Customers.insert({
      customerId: 1,
      name: "Bell Canada"
    });
    Customers.insert({
      customerId: 2,
      customerName: "US Cellular"
    });
  }
  */
});
