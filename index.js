const axios = require("axios").default;
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
dotenv.config();

const questions = [
  { name: "yourname", message: "Hello! What's your name?" },
  { name: "email", message: "What's your email?" },
  { name: "username", message: "What's your GitHub username?" },
  { name: "projectTitle", message: "Project Title:" },
  { name: "description", message: "Project Description:" },
  { name: "install", message: "Intallation Notes:" },
  { name: "usage", message: "Usage Notes:" },
  { name: "test", message: "Test Notes:" },
  { name: "contribute", message: "Contribution Notes:" },
  { name: "license", message: "License Notes:" },
  // { name: "install", message: "Intallation Notes:" },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log('generated');
  });
};

function init() {
  inquirer.prompt(questions).then(function (answers) {
    const accessToken = process.env.accessToken;
    axios.get(`https://api.github.com/users/${answers.username}?access_token=${accessToken}`)
      .then(function(res){
        // answers.yourname = res.data.yourname;
        answers.username = res.data.username;
        // answers.projectTitle = res.data.projectTitle;
        // answers.description = res.data.description;
        // answers.install = res.data.intstall;
        // answers.usage = res.data.usage;
        // answers.test = res.data.test;
        // answers.contribute = res.data.contribute;
        answers.profile = res.data.avatar_url;
        const data = generateMarkdown(answers);
        writeToFile('README.md', data);
      });
  });
};

init();

