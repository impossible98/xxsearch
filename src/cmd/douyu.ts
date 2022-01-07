// Example: https://www.douyu.com/search/?kw=demo
import * as process from 'process';

import open from 'open';

export async function douyu(input: string) {
    console.log(`Website: https://www.douyu.com/search/?kw=${input}`);
    await open(`https://www.douyu.com/search/?kw=${input}`);
    process.exit(0);
}
