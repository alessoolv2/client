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


new Introduction();

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
            .finally(()=>{
              showValues();
            });
        });
      }
      else{
        Input.biometricComponents.init()
        .then((values) => {
          storeBiometrics(values.biometrics);
        })
        .finally(()=>{
          showValues();
        });
      }
  });

  function storeBiometrics(attributes){
    storage.setBiometricComponents(attributes);
  }

  showValues = () => {
    console.log(storage.getProjectName());
    console.log(storage.getProjectAttributes());
    console.log(storage.getKaralundiComponents());
    console.log(storage.getBiometricComponents());
    //createProject();
    //makeFolders();
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

  function installDependencies(){
    let out = [];
    storage.getProjectAttributes().forEach((item,index) => {
      //console.log("{dependencie: "+Instructions[item]);
      out.push(Instructions[item]);
    });
    console.log("Dependencies: "+out[0]);
  }

class Main{
  constructor() {
    new Introduction();
  }

}

//new Main();