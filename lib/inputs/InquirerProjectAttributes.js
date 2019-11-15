
const inquirer = require('inquirer');
const attributes = require('../catalogs/ProjectAttributes.js');
const nameRegEx = /(^[a-z|A-Z]{1}[a-z|A-Z|0-9]*$)/;
module.exports = {
  init: () => {
    return inquirer
     .prompt([
      {
        type: 'input', 
        name: 'projectName',  
        message: 'Ingrese el nombre del proyecto:',
        default: 'BoilerPlateK',
        validate: function( value ) {
          if (value.length && value.match(nameRegEx)) {
            return true;
          } else {
            return 'Ingrese un nombre para el proyecto por favor';
          }
        }
    },
    {
      type: 'checkbox', 
      name: 'attributes', 
      message: 'Seleccione los atributos del proyecto:', 
      choices: attributes,
    }
  ])
  
  }
};


