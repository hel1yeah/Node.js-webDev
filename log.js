const EventEmitter = require('events');
const log = require('./log');

const emmitter = new EventEmitter();

const log = (msg) => {
  console.log(msg);
  emmitter.emit('some_event', 'Event test text!!!');
};

emmitter.on('some_event', (args) => {
  const { id, text } = args;
  console.log(id, text);
});

modules.exports = {
  log,
};
