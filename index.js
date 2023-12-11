// Include packages needed for this application
import licenses from './licenses.js';
import inquirer from 'inquirer';
import {promises as fs} from 'fs';
import generateMarkdown from './generateMarkdown.js';



// Create a function that returns an array of licenses
function getLicenseList() {
    let list = [];
    for (let i = 0; i < licenses.length; i++) {
      list.push(licenses[i][0]);
    }
    return list;
}

const licenseList = getLicenseList();

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the title of your project?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter a valid project title.';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter a valid project description.';
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter valid installation instructions.';
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage information?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter valid usage information.';
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter valid contribution guidelines.';
        }
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the test instructions?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter valid test instructions.';
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "What license would you like to use?",
        choices: licenseList,
        validate(value) {
            const valid = licenseList.includes(value);
            return valid || 'Please select a license.';
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter a valid GitHub username.';
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate(value) {
            const valid = value !== "";
            return valid || 'Please enter a valid email address.';
        }
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README generator!');

    inquirer.prompt(questions).then((answers) => {
        // Use user feedback for... whatever!!
        const markdown = generateMarkdown(answers);
        console.log(markdown);3
        writeToFile('myREADME.md', markdown);
    })  
}

// Function call to initialize app
init();
