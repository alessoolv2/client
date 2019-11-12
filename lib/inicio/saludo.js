const chalk = require('chalk');
const figlet = require('figlet');
var clear = require('clear');

const saludo = () => {
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
module.exports = saludo;
