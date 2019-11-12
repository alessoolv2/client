
const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
        {
            name: 'sabores',
            type: 'checkbox',
            message: 'Ingrese el nombre del proyecto:',
            choices: [{
                name: 'Pepperoni'
              },
              {
                name: 'Ham'
              },
              {
                name: 'Ground Meat'
              },]
          },
      {
        name: 'name',
        type: 'input',
        message: 'Ingrese el nombre del proyecto:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'lista',
        type: 'list',
        message: 'Seleccione las funcionalidades del proyecto:',
        choices: [
            'Order a pizza',
            'Make a reservation',
            new inquirer.Separator(),
            'Ask for opening hours',
            {
              name: 'Contact support',
              disabled: 'Unavailable at this time'
            },
            'Talk to the receptionist'
          ]
      },
      {
        name: 'version-project',
        type: 'input',
        message: 'Ingrese version del projecto:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};