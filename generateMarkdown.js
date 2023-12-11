import licenses from "./licenses.js";

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (license === licenses[i][0]) {
      return licenses[i][1];
    }
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (license === licenses[i][0]) {
      return licenses[i][2];
    }
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  if (link === '') {
    return '';
  }
  else {
    return `## License\n\nThis project is licensed under the [${license}](${link}) license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `# ${data.name}\n\n`;

  output += `[![${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})\n\n`;

  output += `## Description\n\n${data.description}\n\n`;

  output += `## Table of Contents\n\n`;
  output += `- [Installation](#installation)\n`;
  output += `- [Usage](#usage)\n`;
  output += `- [License](#license)\n`;
  output += `- [Contributing](#contributing)\n`;
  output += `- [Tests](#tests)\n`;
  output += `- [Questions](#questions)\n\n`;

  output += `## Installation\n\n${data.installation}\n\n`;

  output += `## Usage\n\n${data.usage}\n\n`;

  output += renderLicenseSection(data.license);

  output += `\n\n## Contributing\n\n${data.contribution}\n\n`;

  output += `## Tests\n\n${data.test}\n\n`;

  output += `## Questions\n\n`;
  output += `If you have any questions, please contact me at ${data.email}. 
            You can also visit my [GitHub](https://github.com/${data.github}) page.\n\n`;


  return output;
}

export default generateMarkdown;