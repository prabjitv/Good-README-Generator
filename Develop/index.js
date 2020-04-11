const axios = require("axios");
const inquirer = require("inquirer");
const dotenv = require("dotenv");

const questions = [
  inquirer
    .prompt([
      {
        type: input,
        name: username,
        message: "Hello! What's your GitHub username?"

      }




    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
