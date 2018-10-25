#!/usr/bin/env node
const cli = require('commander');
const version = require('./package.json').version;

cli
  .version(version, '-v, --version');  

cli
  .command('update')
  .description('Update local cargoes')
  .action(() => {
    const update = require('./cli/update');

    update();
  });

cli
  .command('create <cargo>')
  .description('Create a project from <cargo>')
  .action((cargo) => {
    const install = require('./cli/install');

    install(cargo);
  });

cli.parse(process.argv);