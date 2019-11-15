const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

class Introduction {
  constructor() {
    clear();
    console.log(
      chalk.cyan(
        figlet.textSync('Karalundi', { horizontalLayout: 'fitted' })
      )
    );
    console.log(
        chalk.blue(
          figlet.textSync('Boilerplate', { horizontalLayout: 'fitted' })
        )
      );
    console.log(chalk.blue("INSTITUTO TECNOLOGICO DE ZITÁCUARO\nJóse Arturo Olvera Paulino.\n"));
  }
}
module.exports = Introduction;
