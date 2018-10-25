const env = require('../env');
const path = require('path');
const fs = require('fs');
const util = require('../util');
const os = require('os');

module.exports = (cargo, dest) => {
  const cargoesPath = path.join(os.homedir(), env.CARGO_DIR, env.CARGOES_DIR);
  const cargoPath = path.join(cargoesPath, cargo);
  const spinner = util.getSpinner('Shipping cargo...');

  if(fs.existsSync(cargoesPath)) {
    if(!fs.existsSync(cargoPath)) {
      util.printErr('No such cargo was found!');
    }
    else {
      dest = dest || `${cargo}-cargo`;

      spinner.start();
      util.copyRecursive(cargoPath, dest).then(() => {
        spinner.stop();

        util.printSuccess(`Cargo shipped to ${dest}`);
      })
      .catch(err => {
        spinner.stop();

        util.printErr(err);
      });
    }
  }
  else {
    util.printErr('No cargoes were found, try running `cargo update`');
  }
}