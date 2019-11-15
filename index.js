#!/usr/bin/env node
const Introduction = require('./lib/introduction/Introduction');
const Storage = require('./lib/storage/Storage');
const Input = require('./lib/inputs/Inputs');
const CreateFolders = require('./lib/utils/CreateFolders');
const Instructions = require('./lib/catalogs/NodeInstructions');

//For process to create new folders and files
var execSync = require('child_process').execSync;
var exec = require('child_process').exec;

let storage = Storage.getInstance();//Singleton Storage
let subForders = [];
let mainFolder = "/src/";
  

  async function initalize() {
    let reject  = () => {console.log("REJECT")};
    return new Promise(()=>{
      Input.projectAttributes.init()
      .then((values) => {
        storage.setProjectName(values.projectName);
        storage.setProjectAttributes(values.attributes);
      })
      .finally(() => {
          //out(answers);
          let isKaralundiComponents = storage.getProjectAttributes().find((attribute)=> attribute=='kc') == 'kc';
          if(isKaralundiComponents){
            Input.karalundiComponents.init()
            .then(values => {
              storage.setKaralundiComponents(values.attributes);
            })
            .finally(() =>{
              Input.biometricComponents.init()
                .then((values) => {
                  storeBiometrics(values.biometrics);
                })
            });
          }
          else{
            Input.biometricComponents.init()
            .then((values) => {
              storeBiometrics(values.biometrics);
            })
          }
      });
    },(reject));
    
  }


  function storeBiometrics(attributes){
    storage.setBiometricComponents(attributes);
  }

  showValues = () => {
    console.log(storage.getProjectName());
    console.log(storage.getProjectAttributes());
    console.log(storage.getKaralundiComponents());
    console.log(storage.getBiometricComponents());
    createProject();
    makeFolders();
    installDependencies();
  };

  function makeFolders(){
    let status = storage.getProjectAttributes().find((attribute)=> attribute=='redux') == 'redux';
    subForders = CreateFolders.toMapped(status);
    console.log(subForders);
    CreateFolders.createFolders(storage.getProjectName(),mainFolder,subForders);
  }

  function createProject(){
    console.log(storage.getProjectName());
    let execute = ("react-native init "+storage.getProjectName()+"");
    console.log(execute);
    var child = exec(execute,
        function(err, stdout, stderr) {
          if (err) throw err;
          else {
            console.log(stdout);
            console.log("Se ha finalizado la creación del proyecto!");
          }
          }
    );
  }  

  function process(){
    var child = exec("cd "+storage.getProjectName(),
      function(err, stdout, stderr) {
        if (err) throw err;
        else {
          console.log(stdout);
          console.log("Abir proyecto");
        }
        }
    );
  }

  function installDependencies(){
    storage.getProjectAttributes().forEach((item,index) => {
      //console.log("{dependencie: "+Instructions[item]);
      if(!(Instructions[item] == undefined)){
        var child = exec(Instructions[item],
          function(err, stdout, stderr) {
            if (err) throw err;
            else {
              console.log(stdout);
              console.log("Se ha finalizado la implementación de dependencias!");
            }
            }
        );
        console.log(Instructions[item]);
      }
    });
    
  }

class Main{
  constructor() {
    new Introduction();
    let inputs = initalize();

    inputs.then(()=>{//Lanzar thread final 
      console.log('Resuelto');
      showValues();
    });
    
    
  }

}

new Main();