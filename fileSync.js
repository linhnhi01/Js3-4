const fs = require('fs');

const firstFilePath = fs.readFileSync('./content/first.txt');
const outputFilePath = fs.readFileSync('./content/output.txt');


console.log(firstFilePath);
console.log(outputFilePath);
