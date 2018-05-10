import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

//NextBus API url
const url = "https://gist.githubusercontent.com/john-guerra/a0b840ba721ed771dd02d94a855cb595/raw/d68dba41f118bebc438a4f7ade9d27078efdfc09/sfBuses.json";

if (Meteor.isServer) {
  Meteor.publish("comentarios");

  //ambiente para recibir funciones
  Meteor.bindEnvironment(function (m) {
    console.log(m);
  });
}

Meteor.methods({

  /* Prueba de fetch*/

  "api.fetch"(algo) {
    //para que no llore el linter ¬¬
    check(algo, String);

    let respuesta = fetch(url);

    Meteor.bindEnvironment(function (m) {
      console.log(m);
    });

    return respuesta;
  }

});
