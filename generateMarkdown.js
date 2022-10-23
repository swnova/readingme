// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(data.license} {
//     if (value === "mit"){
//     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   } else if (value === "apache"){
//     return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//   } else if (value === "no license"){
//     return "";
//   }
// }


// function ${renderLicenseSection(data.license) {
//   if (value === 'apache'){
//     return "https://opensource.org/licenses/Apache-2.0"
//   } else if (value === 'mit')
//     return "https://choosealicense.com/licenses/mit/"
//   }
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
### badge
 ${data.license}


  # ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Contribution](#contribution)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## Credits


## Contributions

${data.contributions}

## Questions

Find more details and other projects at: https://www.githib.com/ ${data.githubUsername}
For any other questions feel free to email me: ${data.emailAddy}




## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

`
;}

module.exports = generateMarkdown;
