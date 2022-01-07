// Example: https://www.google.com/search?q=demo
import * as process from 'process';

import open from 'open';

export async function google(input: string) {
    console.log(`Website: https://www.google.com/search?q=${input}`);
    await open(`https://www.google.com/search?q=${input}`);
    process.exit(0);
}
