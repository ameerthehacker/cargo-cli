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
  .command('create <cargo> [dest]')
  .description('Create a project from <cargo>')
  .action((cargo, dest) => {
    const create = require('./cli/create');

    create(cargo, dest);
  });

cli.parse(process.argv);