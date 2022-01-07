// Example: https://indienova.com/gamedb/s/demo/p/1
import open from 'open';

export async function indienova(input: string) {
    console.log(`Website: https://indienova.com/gamedb/s/${input}/p/1`);
    await open(`https://indienova.com/gamedb/s/${input}/p/1`);
}
