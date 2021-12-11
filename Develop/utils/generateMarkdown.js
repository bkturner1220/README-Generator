function generateMarkdown(data) {
//   console.log(data);
  return `
# ${data.name} <div align="right">![License](https://img.shields.io/badge/License-${data.license}-blue)</div>

## Brief Description <a name='description'></a>
   ${data.description}

## Table of Contents
   * [Brief Description](#description)
   * [About ${data.name}](#about)
   * [Installation](#install)
   * [Usage](#usage)
   * [Testing](#test)
   * [Screenshots](#screenshots)
   * [Demo Video](#demo)
   * [Github Pages Link](#pages) 
   * [Github Repo Link](#repo)
   * [Contact Details](#contact)
   * [License](#license)
   * [Contributions to Repo](#contributions)
   * [Additional Information](#info)

## About ${data.name} <a name='about'></a>
   ${data.about}

   
## Installation <a name='install'></a>
   ${data.install}

 
## Usage <a name='usage'></a>
   ${data.usage}   
    
  
## Testing <a name='test'></a>
   ${data.testing}

## Screenshots <a name='screenshots'></a>
   <img src="${data.ssurl}" style="height:250px">

   
## Demo Video <a name='demo'></a>
   A video demonstration of this application can be found here <a href="${data.demovid}" target="_blank">${data.demovid}</a>.
    
   
## Github Pages Link <a name='pages'></a>
   <a href="${data.gitpages}" target="_blank">${data.gitpages}</a>

   
## Github Repo Link <a name='repo'></a>
   <a href="${data.gitrepo}" target="_blank">${data.gitrepo}</a>
  
   
## Contact Information <a name='contact'></a>
   ${data.contact}
   Email: <a href="mailto:${data.email}">${data.email}</a>

   
## License Information <a name='license'></a>
   The application is covered under ${data.license} license.
   ![License](https://img.shields.io/badge/License-${data.license}-blue)
   
## Contributions towards ${data.name} <a name='contributions'></a>
   ${data.contribution}
      
   
## Additional Information <a name='info'></a>
   If you encounter any problems, please feel free to reach out to me by sending me a [Email] to <a href="mailto:${data.email}">${data.email}</a>.
`;
}

module.exports = generateMarkdown;
