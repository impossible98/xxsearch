// Example: https://hub.docker.com/search?q=demo&type=image
import open from 'open';

export async function docker(input: string) {
    console.log(`Website: https://hub.docker.com/search?q==${input}&type=image`);
    await open(`https://hub.docker.com/search?q=${input}`);
}
