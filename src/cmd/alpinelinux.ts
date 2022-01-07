// Example: https://pkgs.alpinelinux.org/packages?name=demo
import * as process from 'process';

import open from 'open';

export async function alpinelinux(input: string) {
    console.log(`Website: https://pkgs.alpinelinux.org/packages?name=${input}`);
    await open(`https://pkgs.alpinelinux.org/packages?name=${input}`);
    process.exit(0);
}
