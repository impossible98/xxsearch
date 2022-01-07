// Example: https://github.com/search?q=demo
import open from 'open';

export async function github(input: string) {
    console.log(`Website: https://github.com/search?q=${input}`);
    await open(`https://github.com/search?q=${input}`);
}
