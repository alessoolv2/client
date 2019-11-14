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
let otro = [];
var fs = require('fs');
var mkdirp = require('mkdirp');
console.log("HOLA MUNDO");
subForders = mapeo(elegidos);
console.log(subForders);
crearCarpetasProyecto(projectName,mainFolder,subForders);

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

  function mapeo(elegidos){
    return elegidos;
  }

  function crearCarpetasProyecto(projectName,mainFolder,subForders){
    console.log(subForders.length > 0);
    if( subForders.length > 0 ){
      subForders.map((folder)=>{
        //console.log(projectName+mainFolder+folder);
        mkdirp(projectName+mainFolder+folder, function (err) {
          if (err) console.error(err)
          else console.log('pow!')
        });
      });
    }else{
      mkdirp(projectName+mainFolder, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
      });
    }
  }

  


 