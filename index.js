const axios = require("axios").default;
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
dotenv.config();

const questions = [
  { name: "username", message: "Hello! What's your GitHub username?" },
  { name: "projectTitle", message: "Project Title:" },
  { name: "description", message: "Project Description:" }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log('generated');
  });
};

function init() {
  inquirer.prompt(questions).then(answers => {
    const accessToken = process.env.accessToken;
    axios.get(`https://api.github.com/users/${answers.username}?access_token=${accessToken}`)
      .then(res, err => {
        if (err) throw err;
        var projectName = res.data.projectTitle;
        var profile = res.data.avatar_url;
        answers.project = projectName;
        answers.profile = profile;
        const data = generateMarkdown(answers);
        writeToFile('README.md', data);
      });
  });
};

init()
// .catch((err) => { throw err});
