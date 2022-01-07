// Example: https://search.jd.com/Search?keyword=demo
import open from 'open';

export async function jd(input: string) {
    console.log(`Website: https://search.jd.com/Search?keyword=${input}`);
    await open(`https://search.jd.com/Search?keyword=${input}`);
}
