// packages required to run application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const { ifError } = require("assert");

// question array
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps needed to install the application?",
    name: "installation",
  },
  {
    type: 'input',
    message: 'Would you like to include any tests for yout application?',
    name: 'tests',
  },
  {
    type: "input",
    message: "provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message: "How would you recommend users contibute to the project?",
    name: "contributions",
  },
  {
    type: "list",
    message: "would you like to add a license to your project?",
    name: "license",
    choices: ["no license", "mit", "apache"],
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "what is your email address?",
    name: "emailAddy",
  },
]

// function to write README file
function writeToFile (fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    writeToFile("./example/README.md", data);
  })
}

// Function call to initialize app
init();

