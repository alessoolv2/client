
const inquirer = require('inquirer');
const attributes = require('../catalogs/KaralundiComponentsAttributes.js');
module.exports = {
  init: () => {
    return inquirer
     .prompt([
    {
      type: 'checkbox', 
      name: 'attributes', 
      message: 'Seleccione los componentes:', 
      choices: [{ name: 'Tenga en cuenta que algunos componentes requieren de otros como iconos', disabled: true },
          new inquirer.Separator(),
        ...attributes], 
    }
  ])
  
  }
};


