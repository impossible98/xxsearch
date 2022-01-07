// Example: https://search.jd.com/Search?keyword=demo
import * as process from 'process';

import open from 'open';

export async function jd(input: string) {
    console.log(`Website: https://search.jd.com/Search?keyword=${input}`);
    await open(`https://search.jd.com/Search?keyword=${input}`);
    process.exit(0);
}
