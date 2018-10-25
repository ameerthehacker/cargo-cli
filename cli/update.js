const util = require('../util');
const cliSpinners = require('cli-spinners');
const ora = require('ora');

module.exports = () => {
  const spinner = ora({
    text: 'Updating cargoes...',
    spinner: cliSpinners.dots
  }).start();

  util.updateCargoes().then(() => {
    spinner.stop();
    util.printSuccess('Cargoes updated!');
  });
}