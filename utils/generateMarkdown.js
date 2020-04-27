function generateMarkdown(data) {
  return `
  # README Generator 
  ![Generic badge](https://img.shields.io/github/repo-size/)
  ## Author Info: ${data.yourname}  
  ![Profile Picture](${data.profile})  
  Email: ${data.email}  
  ## Project Description:   
  ${data.projectTitle}  
  ${data.description}  
  ## Table of contents:  
  [Installation](#installation)  
  [Usage](#usage)  
  [Tests](#tests)  
  [Contributing](#contributing)  
  [License](#license)  
  ## Installation:<a id=installation></a>   
  ${data.install}  
  ## Usage:<a id=usage></a>  
  ${data.usage}  
  ## Tests:<a id=tests></a>  
  ${data.test}
  ## Contributing:<a id=contributing></a>  
  ${data.contribute}  
  ## License:<a id=license></a>  
  ${data.license}
  `;
}
module.exports = generateMarkdown;
