// Example: https://libraries.io/search?q=demo
import open from 'open';

export async function libraries(input: string) {
    console.log(`Website: https://libraries.io/search?q=${input}`);
    await open(`https://libraries.io/search?q=${input}`);
}
