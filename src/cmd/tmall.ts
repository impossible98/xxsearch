// Example: https://list.tmall.com/search_product.htm?q=demo
import * as process from 'process';

import open from 'open';

export async function tmall(input: string) {
    console.log(`Website: https://list.tmall.com/search_product.htm?q=${input}`);
    await open(`https://list.tmall.com/search_product.htm?q=${input}`);
    process.exit(0);
}
