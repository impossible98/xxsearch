import * as process from 'process';

import { help } from './help';
import { version } from './version';

import { bing } from './bing';
import { cnbing } from './cnbing';
import { douyu } from './douyu';
import { duckduckgo } from './duckduckgo';
import { github } from './github';
import { google } from './google';
import { jd } from './jd';
import { libraries } from './libraries';
import { npmjs } from './npmjs';
import { taobao } from './taobao';
import { tmall } from './tmall';

export function main() {
    if (process.argv.length === 4) {
        if (process.argv[2] === 'bing') {
            bing(process.argv[3]);
        } else if (process.argv[2] === 'cnbing') {
            cnbing(process.argv[3]);
        } else if (process.argv[2] === 'douyu') {
            douyu(process.argv[3]);
        } else if (process.argv[2] === 'duckduckgo') {
            duckduckgo(process.argv[3]);
        } else if (process.argv[2] === 'github') {
            github(process.argv[3]);
        } else if (process.argv[2] === 'google') {
            google(process.argv[3]);
        } else if (process.argv[2] === 'jd') {
            jd(process.argv[3]);
        } else if (process.argv[2] === 'libraries') {
            libraries(process.argv[3]);
        } else if (process.argv[2] === 'npmjs') {
            npmjs(process.argv[3]);
        } else if (process.argv[2] === 'taobao') {
            taobao(process.argv[3]);
        } else if (process.argv[2] === 'tmall') {
            tmall(process.argv[3]);
        }
    } else if (process.argv.length === 3) {
        if (process.argv[2] === 'version') {
            version();
        } else {
            help();
        }
    }
}
