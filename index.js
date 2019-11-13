#!/usr/bin/env node
/*
const inquirer  = require('./lib/inquirer.js');
const inquirerKC = require('./lib/inquirerKaralundiComponents');
const inquirerBC = require('./lib/inquirerBiometricComponents');
const saludo = require('./lib/inicio/saludo.js');

var execSync = require('child_process').execSync;
var exec = require('child_process').exec;

let atributosProyecto; // undefined until myAsyncFunc is called
*/
let projectName = "Prueba2";
let mainFolder = "/src/"
let subForders = ["assets","catalogs","components","redux","sagas","screens","styles","utils"];
let elegidos = ["redux","sagas","screens","utils"];
var fs = require('fs');
var mkdirp = require('mkdirp');
console.log("HOLA MUNDO");
mapeo(subForders,elegidos);
//crearCarpetasProyecto(projectName,mainFolder,subForders);

/*
saludo();

  inquirer.init()
  .then((values) => {
    myAsyncFunc(values);
  })
  .finally(() => {
      //out(answers);
      inquirerKC.init()
      .then(values => {
        console.log(values);
      })
      .finally(()=> {
        inquirerBC.init()
        .then((a) => {
          console.log(a);
        });
      })
      
  });
*/
 
  
  

  

  myAsyncFunc = (result) => { 
     console.log(result);
     atributosProyecto = result;
     console.log(atributosProyecto.projectName);
  };
  


  function out(value){
    console.log(value);
    let execute = ("react-native init "+value.name+"");
    console.log(execute);
    var child = exec(execute,
        function(err, stdout, stderr) {
          if (err) throw err;
          else {
            console.log(stdout);
            console.log("ACABO");
          }
          }
      );
    
  }  

  function mapeo(subForders,elegidos){
    var a = subForders.indexOf(elegidos.map((r)=> r));
    console.log(a);
  }

  function crearCarpetasProyecto(projectName,mainFolder,subForders){
    subForders.map((folder)=>{
      //console.log(projectName+mainFolder+folder);
      mkdirp(projectName+mainFolder+folder, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
      });
    })
    
  }

  


 