const fs = require('fs');
fs.watch('target.txt',function() {
  console.log("File 'target.txt' has been updated");
});

console.log('Now watching target.txt for changes..');