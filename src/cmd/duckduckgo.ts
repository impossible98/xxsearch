// Example: https://duckduckgo.com/?q=demo
import * as process from 'process';

import open from 'open';

export async function duckduckgo(input: string) {
    console.log(`Website: https://duckduckgo.com/?q=${input}`);
    await open(`https://duckduckgo.com/?q=${input}`);
    process.exit(0);
}
