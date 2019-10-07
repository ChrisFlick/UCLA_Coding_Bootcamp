const inquirer = require('inquirer');
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What languages do you know?',
        name: 'language',
    },
    {
        type: 'input',
        message: 'What is your prfered method of communicating?',
        name: 'method',
    },
]).then(function(response) {
    fs.writeFile('log.txt', JSON.stringify(response), function(err) {
        if (err) {
            return console.log(err)
        }

        console.log('success!')
    })
})