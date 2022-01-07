// Example: https://search.bilibili.com/all?keyword=demo
import * as process from 'process';

import open from 'open';

import { ConfigApp } from '../config/mod';

const configApp = new ConfigApp();

export async function bilibili(input: string) {
    console.log(`Website: https://search.bilibili.com/all?keyword=${input}`);

    if (configApp.getConfig().open) {
        await open(`https://search.bilibili.com/all?keyword=${input}`);
    }

    process.exit(0);
}
