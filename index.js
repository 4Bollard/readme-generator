const inquirer = require('inquirer');
const fs = require('fs');
//const questions = [];
const {generateMarkdown} = require("./utils/generateMarkdown")



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'descriptions',
            message: 'What does your project do?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any installation instructions you may have.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will you implement your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: [ 'MIT License', 'Apache License 2.0', 'The Unlicense', 'Eclipse Public License 2.0' ],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Any other contributors in your projects?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there tests for your project?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub Username.',
        },
        
    ])
    .then((data) => {
        

        fs.writeFile('myREADME.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Successfully created myREADME.md!')
        );
    });

