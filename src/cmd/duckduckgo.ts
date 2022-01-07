// Example: https://duckduckgo.com/?q=demo
import open from 'open';

export async function duckduckgo(input: string) {
    console.log(`Website: https://duckduckgo.com/?q=${input}`);
    await open(`https://duckduckgo.com/?q=${input}`);
}
