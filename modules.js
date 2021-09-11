const os = require('os');

const { userName: user, sayHi } = require('./test');

console.log(os.platform(), os.release());

console.log(sayHi(user));
