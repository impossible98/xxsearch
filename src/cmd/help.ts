import * as process from 'process';

import * as constants from '../constants/mod';

export function help() {
    console.log(`Usage: ${constants.BinName} [command]`);
    console.log('');
    console.log('  help: show this help');
    console.log('');
    console.log('  version: show the version');
    console.log('');

    console.log('  bing: search bing');
    console.log('');
    console.log('  cnbing: search cnbing');
    console.log('');
    console.log('  docker: search docker');
    console.log('');
    console.log('  douyu: search douyu');
    console.log('');
    console.log('  duckduckgo: search duckduckgo');
    console.log('');
    console.log('  github: search github');
    console.log('');
    console.log('  google: search google');
    console.log('');
    console.log('  indienova: search indienova');
    console.log('');
    console.log('  jd: search jd');
    console.log('');
    console.log('  libraries: search libraries');
    console.log('');
    console.log('  npmjs: search npmjs');
    console.log('');
    console.log('  openvsx: search openvsx');
    console.log('');
    console.log('  taobao: search taobao');
    console.log('');
    console.log('  tmall: search tmall');
    console.log('');
    process.exit(0);
}
