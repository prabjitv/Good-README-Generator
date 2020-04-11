function generateMarkdown(data) {
  return `
# ${data.title}

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
