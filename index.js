#!/usr/bin/env node

const inquirer  = require('./lib/inquirer.js');
const inquirerKC = require('./lib/inquirerKaralundiComponents');
const inquirerBC = require('./lib/inquirerBiometricComponents');
const saludo = require('./lib/inicio/saludo.js');

var execSync = require('child_process').execSync;
var exec = require('child_process').exec;


saludo();
      
   inquirer.init()
   .then(answers => {
      //out(answers);
      console.log(answers);
      inquirerKC.init()
      .then(values => {
        console.log(values);
        inquirerBC.init()
        .then((values) => {
          console.log(values);
        });
    });
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

  


 