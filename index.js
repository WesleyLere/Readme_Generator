// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project!',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Give Install instructons',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['mit', 'apache-2.0', 'gpl-3.0', 'None'],
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are your testing instructions?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter credits other credits if any.',
        name: 'credits'
    }
]

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((data) => {
     fs.writeFile('generatedREADME.md',generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Readme generated!')
    );
    
})
}

// Function call to initialize app
init();
