const downloadGitRepo = require('download-git-repo');
const env = require('./env');
const os = require('os');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

module.exports = {
  updateCargoes() {
    const cargoPath = path.join(os.homedir(), env.CARGO_DIR);
    const cargoesPath = path.join(cargoPath, env.CARGOES_DIR);

    return new Promise((resolve, reject) => {
      if(!fs.existsSync(cargoPath)) {
        try {
          fs.mkdirSync(cargoPath);
        }
        catch(err) {
          reject(err);
        }
      }

      downloadGitRepo(env.CARGO_CORE, cargoesPath, (err) => {
        if(!err) {
          resolve();
        }
        else {
          reject(err);
        }
      });
    });
  },
  printSuccess(info) {
    console.log(chalk.green(info));
  },
  printErr(error) {
    console.log(chalk.red(error));
  }
}