


'MIT License', 'Apache License 2.0', 'The Unlicense', 'Eclipse Public License 2.0'

function generateMarkdown(data) {
  switch (data.license) {
    case 'MIT License':
      data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case 'Apache License 2.0':
      data.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;

    case 'The Unlicense':
      data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;

    case 'Eclipse Public License 2.0':
      data.license = "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
      break;

    default:
      console.log("WTF mate")
      break;
  }
  const results =
    `
# ${data.title} ${data.license} 

## Table of Contents

 * [Description](#description)

 * [Installation](#installation)

 * [Usage](#usage)

 * [License](#license)

 * [Contributing](#contributing)

 * [Tests](#tests)

 * [Questions](#questions)

## Description

${data.descriptions}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

[GitHub](https://www.github.com/${data.gitHub})

${data.email}
`
return results
}












module.exports = {generateMarkdown};
