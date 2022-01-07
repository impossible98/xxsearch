// Example: https://www.bing.com/search?q=demo
import open from 'open';

export async function bing(input: string) {
    console.log(`Website: https://www.bing.com/search?q=${input}`);
    await open(`https://www.bing.com/search?q=${input}`);
}
