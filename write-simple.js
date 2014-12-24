const fs = require('fs');
fs.writeFile('target.txt', 'wtf message' ,function(err,data){
  if(err){
    throw err;
  }
  console.log('File Saved!');
});