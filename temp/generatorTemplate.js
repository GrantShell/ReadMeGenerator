function generatorTemplate(data) {
  return `

# ${data.title}
https://github.com/${data.github}/${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#install)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#testing)
# Installation
The following necessary dependencies must be installed to run the application: ${data.installation}
* [License](#license)
# Usage
In order to use this app, ${data.usage}
# License
This project is licensed under the ${data.license} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing
​Contributors: ${data.contribution}
# Tests
The following is needed to run the test: ${data.testing}
# Questions
If you have any questions about the repo, open an issue or contact ${data.github} directly at : ${data.email}.
`;
}
module.exports = generatorTemplate;
