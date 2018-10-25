const util = require('../util');

module.exports = () => {
  const spinner = util.getSpinner('Updating cargoes...');
  
  util.updateCargoes().then(() => {
    spinner.stop();
    util.printSuccess('Cargoes updated!');
  })
  .catch(err => {
    spinner.stop();    
    util.printErr(err);
  });
}