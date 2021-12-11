const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'gituser',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'gitemail',
        message: 'What is your Github email address?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your Project:'
    },

    {
        type: 'input',
        name: 'about',
        message: 'Please tell about this Project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usuage for this Project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What installation commands for installing are needed for this Project:',
        default: 'npm i'

    },
    {
        type: 'input',
        name: 'testing',
        message: 'What test commands for testing are needed for this Project:',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'ssurl',
        message: 'Please provide a link to a screenshot of your Project'
    },
    {
        type: 'input',
        name: 'demovid',
        message: 'Please provide a link to a demo video of your Project'
    },
    {
        type: 'input',
        name: 'gitrepo',
        message: 'Please provide your Github Repository url is for this Project:'
    },
    {
        type: 'input',
        name: 'gitpages',
        message: 'Please provide your Github Pages demo url is for this Project:'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please give any contact information you want to provide for this Project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['Apache2.0','GeneralPublic3.0','MIT','BSD2Clause', 'BSD3Clause', 'BoostSoftware1.0', 'CreativeCommonsZero1.0','EclipsePublic2.0','AfferoGeneralPublic3.0','GeneralPublic2.0','LesserGeneralPublic2.1','MozillaPublic2.0','TheUnlicense',]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },

];

// Nodejs FS File Function to write to recently created README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        // If there is an error, will report an error.
        err ? console.error(err) : console.log(`Your README.md file has been created.`)
    );
}

// init function program
function init() {
    //  Begin to ask questions with inquirer function
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(answers);
        // File created according to answers provided
        writeToFile('README.md', data);
    })
}

// initialize init
init();