#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer.js');

var execSync = require('child_process').execSync;
var exec = require('child_process').exec;
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
  console.log(chalk.blue("INSTITUTO TECNOLOGICO DE ZITÁCUARO\nJóse Arturo Olvera Paulino."));

  
   inquirer.askGithubCredentials()
   .then(answers => {
    out(answers);
    
  });
  
  function out(value){
    console.log(value);
    let execute = ("react-native init "+value.name+"");
    console.log(execute);
    var child = exec(execute,
        function(err, stdout, stderr) {
          if (err) throw err;
          else console.log(stdout);
      });
    
} 

  


 