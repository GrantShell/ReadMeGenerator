let inquirer = require("inquirer");
let fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions for your project:",
      name: "install",
    },
    {
      type: "input",
      message: "Enter usage information for your project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter contribution guidelines for your project:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Enter test information for your project:",
      name: "testing",
    },
    {
      type: "input",
      message: "Enter your GitHub Username:",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
    },
    {
      type: "list",
      message: "Which license do you want to use",
      name: "license",
      choices: ["1", "2", "3", "4"],
    },
  ])
  .then((res) => {
    console.log("Creating README file...");
    createREADMEFile(res);
  })
  .catch((err) => {
    console.log(err);
  });
