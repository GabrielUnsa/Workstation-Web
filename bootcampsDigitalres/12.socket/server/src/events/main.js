const EventEmitter = require('events');

class MainEmitter extends EventEmitter {}

let mainEmitter;
module.exports = (() => {
  if (!mainEmitter) {
    mainEmitter = new MainEmitter();
  }
  return mainEmitter;
})();
