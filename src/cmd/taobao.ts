// Example: https://search.taobao.com/search?q=demo
import * as process from 'process';

import open from 'open';

export async function taobao(input: string) {
    console.log(`Website: https://search.taobao.com/search?q=${input}`);
    await open(`https://search.taobao.com/search?q=${input}`);
    process.exit(0);
}
