const inquirer = require('inquirer');
const attributes = require('../catalogs/BiometricAttributes.js');
module.exports = {
  init: () => {
    return inquirer
     .prompt([
    {
      type: 'checkbox', 
      name: 'biometrics', 
      message: 'Seleccione los componentes biometricos:', 
      choices: [{ name: 'Tenga en cuenta que algunos componentes requieren de otros como iconos', disabled: true },
          new inquirer.Separator(),
        ...attributes], 
    }
  ])
  
  }
};


