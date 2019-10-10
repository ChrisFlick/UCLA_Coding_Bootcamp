const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    let animals = [];

    readFileAsync('cat.json', 'utf8').then((res) => {
      
      let cats = JSON.parse(res);
      console.log(cats.length)
      for (let i = 0; i < cats.length; i++) {
        animals.push(cats[i]);
        
      }
      console.log(animals);
    }).then(() => {
      readFileAsync('dog.json', 'utf8').then((res) => {
        let dogs = JSON.parse(res);
        for (let i = 0; i < dogs.length; i++) {
          animals.push(dogs[i]);
  
          
        }
        console.log(animals);
      });
    }).then(() => {
      readFileAsync('goldfish.json', 'utf8').then((res) => {
        let goldfish = JSON.parse(res);
        for (let i = 0; i < goldfish.length; i++) {
          animals.push(goldfish[i]);
  
          
        }
        console.log(animals);
      })
    }).then (() => {
      readFileAsync('hamster.json', 'utf8').then((res) => {
        let hamster = JSON.parse(res);
        for (let i = 0; i < hamster.length; i++) {
          animals.push(hamster[i]);
  
          
        }
        console.log(animals);
      }).then(() => {
        console.log(animals)
        writeFileAsync('combined.json', JSON.stringify(animals));
      })
    })

    

   

   

    console.log(animals)

  } catch(err) {
    console.log(err)
  }
}

combineAnimals();
