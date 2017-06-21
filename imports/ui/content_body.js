import { Template } from 'meteor/templating';

import { Customers } from '../api/collections.js';

import './content_body.html';

Template.content_body.helpers({
  customerName: function() {
    return Customers.findOne({customerId: 2}).customerName;
  }
});
