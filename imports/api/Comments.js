import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Mongo } from "meteor/mongo";

//mongodb collection for comments
export const Comments = new Mongo.Collection("comments");

if (Meteor.isServer) {
  // Meteor publication for server
  Meteor.publish("comments", function commentsPublication() {
    //gets the comments from Mongo.
    return Comments.find();
  });
}

Meteor.methods({
  "comment.insert"(comment, name, rute) {
    //checks for the comment to be a valid one
    check(comment, String);
    //checks for the comment to be a valid one
    check(name, String);
    //checks for the rute to be a valid one
    check(rute, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    //creates the comment to insert on Mongo.
    let commentToInsert = { comment, name, rute };
    Comments.insert(commentToInsert);
  }
});
