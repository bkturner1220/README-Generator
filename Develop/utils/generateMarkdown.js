// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   console.log(data);
  return `
# ${data.name} <div align="right">![License](https://img.shields.io/badge/License-${data.license}-blue)</div>
   
   ## Table of Contents
      * [Brief Description](#description)
      * [About Project](#about)
      * [Usage](#usage)
      * [Installation](#install)
      * [Testing](#test)
      * [Screenshots](#screenshots)
      * [Demo Video](#demo)
      * [Github Pages Link](#pages) 
      * [Github Repo Link](#repo)
      * [Contact Details](#contact)
      * [License](#license)
      * [Contributions to Repo](#contributions)
      * [Additional Information](#info)

   <a name='description'></a>
   ## Brief Description
      ${data.description}

   <a name='about'></a>
   ## About Project
      ${data.about}

   <a name='install'></a>
   ## Installation
      ${data.usage}   

   <a name='install'></a>
   ## Installation
      ${data.install}
    
   <a name='test'></a>
   ## Testing
      ${data.testing}

   <a name='screenshots'></a>  
   ## Screenshots
      <img src="${data.ssurl}" style="height:250px">

   <a name='demo'></a>
   ## Demo Video
      A video demonstration of this application can be found here<a href="${data.demovid}" target="_blank">${data.demovid}</a>.
    
   <a name='pages'></a>
   ## Github Pages Link
      <a href="${data.gitpages}" target="_blank">${data.gitpages}</a>

   <a name='repo'></a>
   ## Github Repo Link
      <a href="${data.gitrepo}" target="_blank">${data.gitrepo}</a>
  
   <a name='contact'></a>
   ## Contact Information
      ${data.contact}
      Email: <a href="mailto:${data.email}">${data.email}</a>

   <a name='license'></a>
   ## License Information
      The application is covered under ${data.license} license.
  
   <a name='contributions'></a>
   ## Contributions for ${data.title}
      ${data.contribution}
      
   <a name='info'></a>
   ## Additional Information
      If you encounter any problems, please feel free to reach out to me by sending me a [Email] to <a href="mailto:${data.email}">${data.email}</a>.
`;
}

module.exports = generateMarkdown;
