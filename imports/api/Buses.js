import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

const url = "https://gist.githubusercontent.com/john-guerra/a0b840ba721ed771dd02d94a855cb595/raw/d68dba41f118bebc438a4f7ade9d27078efdfc09/sfBuses.json";

Meteor.methods({
  "getBusesData"() {
    //long live promises!!!!
    let response = new Promise((resolve, reject) => {
      HTTP.call("GET", url, (err, response) => {
        if (err) reject(err);
        resolve(response);
      });
    });
    return response;
  }
});
