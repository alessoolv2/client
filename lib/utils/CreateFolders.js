const mkdirp = require('mkdirp');
const fs = require('fs');

let subForders = ["assets","catalogs","components","screens","styles","utils"];
let extraFolders = ['redux','sagas'];
function toMapped(status){
  if(status){
    extraFolders.map((e)=>{
      subForders.push(e);
    });
  }
  return subForders;
}

function createFolders(projectName,mainFolder = '/src/',subForders){
    console.log(subForders.length > 0);
    if( subForders.length > 0 ){
      subForders.map((folder)=>{
        //console.log(projectName+mainFolder+folder);
        mkdirp(projectName+mainFolder+folder, function (err) {
          if (err) console.error(err)
          else console.log('Folder create!')
        });
      });
    }else{
      mkdirp(projectName+mainFolder, function (err) {
        if (err) console.error(err)
        else console.log('Folder create!')
      });
    }
}

module.exports = {
    toMapped,
    createFolders
}