const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


let repoNames = '';

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios
      .get(queryUrl)
      .then((res) => {
        let count = 0;
         res.data.forEach(element => {
           repoNames += `${element.name}\n`
           count++;
         });

         fs.writeFile('repos.txt', repoNames, (err) => {
           if (err) {
             console.log(err)
           } else {
             console.log(`Saved users ${count} repos`)
           }
         })

         
      })
  });
