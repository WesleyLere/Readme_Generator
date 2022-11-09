// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
![Badge](https://img.shields.io/badge/LICENSE-${data.license}-blue?style=for-the-badge&logo=github)


  ## Table of Contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#license)
  - [Contributing](#Contribution)
  - [Tests](#testing)
  - [Credits](#credits)
  - [Contact-Info](#contact-info)

  ## Description
${data.description}

  ## Installation
${data.installation}
  
  ## Usage
${data.usage}
  
  ## License
[${data.license}](https://choosealicense.com/licenses/${data.license}/)

  ## Contribution
${data.contributing}
  
  ## Testing
${data.testing}
  
  ### Credits
[${data.github}](https://github.com/${data.github})
${data.credits}

### Contact info
[${data.email}](https://mail.google.com/mail/u/0/#inbox?compose=new)
[${data.github}](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
