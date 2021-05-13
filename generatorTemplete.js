function generatorTemplete(data) {
  return `

# ${data.Title}
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
In order to use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing
​Contributors: ${data.Contributing}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`;
}
module.exports = generatorTemplete;
