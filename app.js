const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (error, data) => {
  fs.mkdir('./files', () => {
    fs.writeFile('./files/testWriteFile.txt', `${data} New text!`, (error) => {
      error ? console.log(error) : null;
    });
  });
});

setTimeout(() => {
  if (fs.existsSync('./files/testWriteFile.txt')) {
    fs.unlink('./files/testWriteFile.txt', () => {});
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync('./files')) {
    fs.rmdir('./files', () => {});
  }
}, 6000);
