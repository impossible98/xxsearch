// Example: https://www.npmjs.com/search?q=demo
import * as process from 'process';

import open from 'open';

export async function npmjs(input: string) {
    console.log(`Website: https://www.npmjs.com/search?q=${input}`);
    await open(`https://www.npmjs.com/search?q=${input}`);
    process.exit(0);
}
