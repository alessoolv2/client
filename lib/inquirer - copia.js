
const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    return inquirer
     .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'Ingrese el nombre del proyecto:',
        default: 'TheGrandK',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Ingrese un nombre para el proyecto por favor';
          }
        }
    }
  ])
  
  }
};


