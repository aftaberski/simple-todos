Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs in the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}

