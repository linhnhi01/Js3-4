const fs = require('fs');

function getWritableStreamSomehow() {
  return fs.createWriteStream('./content/output.txt');
}

const writer = getWritableStreamSomehow();
for (let i = 0; i < 100000; i++) {
  writer.write(`hello, #${i}!\n`);
}
writer.on('finish', () => {
  console.log('All writes are now complete.');
});
writer.end('This is the end\n');
