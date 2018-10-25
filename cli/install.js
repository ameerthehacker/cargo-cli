const env = require('../env');
const path = require('path');
const fs = require('fs');
const util = require('../util');
const os = require('os');

module.exports = (cargo) => {
  const cargoesPath = path.join(os.homedir(), env.CARGO_DIR, env.CARGOES_DIR);
  const cargoPath = path.join(cargoesPath, cargo);

  if(fs.existsSync(cargoesPath)) {
    if(!fs.existsSync(cargoPath)) {
      util.printErr('No such cargo was found!');
    }
  }
  else {
    util.printErr('No cargoes were found, try running `cargo update`');
  }
}