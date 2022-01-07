import * as process from 'process';

import { help } from './help';
import { version } from './version';

import { ConfigApp, defaultConfigToml } from '../config/mod';

import { bing } from './bing';
import { cnbing } from './cnbing';
import { docker } from './docker';
import { douyu } from './douyu';
import { duckduckgo } from './duckduckgo';
import { github } from './github';
import { google } from './google';
import { indienova } from './indienova';
import { jd } from './jd';
import { libraries } from './libraries';
import { npmjs } from './npmjs';
import { openvsx } from './openvsx';
import { taobao } from './taobao';
import { tmall } from './tmall';

const configApp = new ConfigApp();

export function main() {
    if (!configApp.exitsConfig()) {
        configApp.writeConfig(defaultConfigToml);
    }

    if (process.argv.length === 4) {
        if (process.argv[2] === 'bing') {
            bing(process.argv[3]);
        } else if (process.argv[2] === 'cnbing') {
            cnbing(process.argv[3]);
        } else if (process.argv[2] === 'docker') {
            docker(process.argv[3]);
        } else if (process.argv[2] === 'douyu') {
            douyu(process.argv[3]);
        } else if (process.argv[2] === 'duckduckgo') {
            duckduckgo(process.argv[3]);
        } else if (process.argv[2] === 'github') {
            github(process.argv[3]);
        } else if (process.argv[2] === 'google') {
            google(process.argv[3]);
        } else if (process.argv[2] === 'indienova') {
            indienova(process.argv[3]);
        } else if (process.argv[2] === 'jd') {
            jd(process.argv[3]);
        } else if (process.argv[2] === 'libraries') {
            libraries(process.argv[3]);
        } else if (process.argv[2] === 'npmjs') {
            npmjs(process.argv[3]);
        } else if (process.argv[2] === 'openvsx') {
            openvsx(process.argv[3]);
        } else if (process.argv[2] === 'taobao') {
            taobao(process.argv[3]);
        } else if (process.argv[2] === 'tmall') {
            tmall(process.argv[3]);
        } else {
            help();
        }
    } else if (process.argv.length === 3) {
        if (process.argv[2] === 'version') {
            version();
        } else {
            help();
        }
    }
}
