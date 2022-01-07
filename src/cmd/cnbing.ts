// Example: https://cn.bing.com/search?q=demo
import * as process from 'process';

import open from 'open';

export async function cnbing(input: string) {
    console.log(`Website: https://cn.bing.com/search?q=${input}`);
    await open(`https://cn.bing.com/search?q=${input}`);
    process.exit(0);
}
