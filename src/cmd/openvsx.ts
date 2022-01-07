// Example: https://open-vsx.org/?search=demo
import * as process from 'process';

import open from 'open';

export async function openvsx(input: string) {
    console.log(`Website: https://open-vsx.org/?search=${input}`);
    await open(`https://open-vsx.org/?search=${input}`);
    process.exit(0);
}
