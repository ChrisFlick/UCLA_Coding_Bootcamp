'use strict'

const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);


  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  animalJSON.forEach(element => {
    switch(element.species) {
      case 'dog':
        dogs.push(element);
        break;
      case 'cat':
        cats.push(element)
        break;
    }
  });

  let catsJSON = JSON.stringify(cats)
  let dogsJSON = JSON.stringify(dogs)
  console.log(catsJSON)
  console.log(dogsJSON)

});
