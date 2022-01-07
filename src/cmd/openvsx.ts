// Example: https://open-vsx.org/?search=demo
import open from 'open';

export async function openvsx(input: string) {
    console.log(`Website: https://open-vsx.org/?search=${input}`);
    await open(`https://open-vsx.org/?search=${input}`);
}
