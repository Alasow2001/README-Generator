// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your README document?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type in a description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Type in steps on how to install your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Type in how to use your project: '
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter links that assisted you in creating the project: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license: ',
        choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Type in those that have contributed to this project: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Are there any tests included in the project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Successful README generated'));

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const README = generateMarkdown(answers);
        writeToFile('./assets/README.md', README);
    });
}

// Function call to initialize app
init();
