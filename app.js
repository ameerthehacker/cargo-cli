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
 
cli.parse(process.argv);