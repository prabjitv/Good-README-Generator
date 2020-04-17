const axios = require("axios").default;
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const fs = require("fs");

const accessToken = process.env.accessToken;

const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Hello! What's your GitHub username?",
      },
      {
        type: "input",
        name: "projectTitle",
        message: "Project Title:",
      },
      {
        type: "input",
        name: "description",
        message: "Project Description:",
      }
    ])
    .then(function (answers) {
      const url = `https://api.github.com/users/${answers.username}?access_token=${accessToken}`;

      axios
        .get(url)
        .then(function (res, err) {
          if (err) throw err;

          const responseSaved = {
            userName = res
          }
      
          return responseSaved;
          
        });
    })
];

// function writeToFile(fileName, data) {
// }

async function init() {
  const apiReturn = await api.js(

  )

// }

// init();
