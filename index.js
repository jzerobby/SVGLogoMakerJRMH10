const inquirer = require('inquirer');
const generateShapes = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color', 
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo',
        choices: ["circle", "square", "triangle"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color', 
    },
];

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        const showShapes = generateShapes(answers);
        console.log(showShapes);
        fs.writeFile('./logo.svg', showShapes, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
      );
    })
}

// Function call to initialize app
init();