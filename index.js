// TODO: Include packages needed for this application

var inquirer = require('inquirer');

var fs = require("file-system");

// TODO: Create an array of questions for user input

const promptMe = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of you README? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter README title!");
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "description",
            message: "Provide a description of your project? (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter README description!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Provide any installation instructions needed for application or project.",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please enter installation instructions!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide necessary usage instructions."
            
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide contribution guidelines."
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instructions."
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose application license:",
            choices: ["Public Domain", "Permissive", "LGPL", "Copyleft", "Proprietary"]
            
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username",
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file

promptMe ()
    .then(data => {
        console.log(data)

        let fileContent = `# ${data.title}       
License: ${data.license}

## Table of Contents:
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution Guidelines](#contribution)
[Test Instructions](#test)
[Questions](#questions)


## Description: 
${data.description}
## Installation Instructions: 
${data.installation} 
## Usage Instructions: 
${data.usage} 
## Contribution Guidelines: 
${data.contribution} 
## Test Instructions: 
${data.test}
## Questions:
https://github/${data.github}.com

For any questions please visit application author's github.
`


        fs.writeFile("./README.md", fileContent, err => {
            if (err) throw err;
            console.log("README complete!")
        })
    })



