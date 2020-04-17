function generateMarkdown(data) {
  return `
# ${data.title}
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email
`;
}

module.exports = generateMarkdown;
