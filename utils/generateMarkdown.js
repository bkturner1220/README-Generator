function generateMarkdown(data) {
//   console.log(data);
  return `
# ${data.name} ![License](https://img.shields.io/badge/License-${data.license}-blue)

## Brief Description 📖<a name='description'></a>
   ${data.description}

## Table of Contents 💡
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
   
## Installation 🏗️<a name='install'></a>
   ${data.install}
 
## Usage 📝<a name='usage'></a>
   ${data.usage}   
      
## Testing <a name='test'></a>
   ${data.testing}

## Screenshots 📷<a name='screenshots'></a>
   ![alt text](${data.ssurl})
   
## Demo Video <a name='demo'></a>
   ![alt text](${data.demovid})
        
## Github Pages Link <a name='pages'></a>
   <a href="https://${data.gituser}.github.io/${data.gitrepo}" target="_blank">https://${data.gituser}.github.io/${data.gitrepo}</a>
   
## Github Repo Link <a name='repo'></a>
   <a href="https://github.com/${data.gituser}/${data.gitrepo}" target="_blank">https://github.com/${data.gituser}/${data.gitrepo}</a>
     
## Contact Information <a name='contact'></a>
   Github Username: [${data.gituser}](https://github.com/${data.gituser}/)<br>
   Github: <a href="https://github.com/${data.gituser}/">https://github.com/${data.gituser}/</a><br>
   Email: <a href="mailto:${data.email}">${data.email}</a>
   
## License Information <a name='license'></a>
![License](https://img.shields.io/badge/License-${data.license}-blue)<br>
   The application is covered under ${data.license} license.
   
## Contributions towards ${data.name} 🏆<a name='contributions'></a>
   ${data.contributions}
         
## Additional Information <a name='info'></a>
   If you encounter any problems, please feel free to reach out to me by sending me a [Email] to <a href="mailto:${data.email}">${data.email}</a>.
`;
}

module.exports = generateMarkdown;
