// packages required to run application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// question prompt for readme generator

// const genReadMe= ({title, description, installation, }) =>{

  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps needed to install the application?',
      name: 'insatllation',
    },
    {
      type: 'input',
      message: 'provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How would you recommend users contibute to the project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: ''
    }
  ])
  .then((response) =>{
    console.log(response)
  });
  //   response.confirm === response.password
  //     ? console.log('Success!')
  //     : console.log('You forgot your password already?!')
  // );

  
// }

// console.log('damn son')
//   # <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// const genReadMe= ({title, description, installation, })
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is the title of the project?',
//       name: 'title',
//     },
//     {
//       type: 'input',
//       message: 'Describe yout project.',
//       name: 'Description',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

  

// //   # <Your-Project-Title>

// // ## Description

// // Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// // - What was your motivation?
// // - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// // - What problem does it solve?
// // - What did you learn?

// // ## Table of Contents (Optional)

// // If your README is long, add a table of contents to make it easy for users to find what they need.

// // - [Installation](#installation)
// // - [Usage](#usage)
// // - [Credits](#credits)
// // - [License](#license)

// // ## Installation

// // What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// // ## Usage

// // Provide instructions and examples for use. Include screenshots as needed.

// // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

// //     ```md
// //     ![alt text](assets/images/screenshot.png)
// //     ```

// // ## Credits

// // List your collaborators, if any, with links to their GitHub profiles.

// // If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// // If you followed tutorials, include links to those here as well.

// // ## License

// // The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// // ---

// // 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// // ## Badges

// // ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// // Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// // ## Features

// // If your project has a lot of features, list them here.
