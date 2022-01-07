// Example: https://github.com/search?q=demo
// Docs: https://docs.github.com/en/rest/reference/search#search-repositories
import { Octokit } from '@octokit/core';
import open from 'open';

import { Color } from '../utils/color';
import { question, rl } from '../utils/question';
const octokit = new Octokit();
const color = new Color();

export async function github(input: string) {
    let result = await octokit.request('GET /search/repositories', {
        q: input,
    });

    for (let i = 0; i < result.data.items.length; i++) {
        const id = '(' + String(i + 1) + ')';
        const fullName = result.data.items[i].full_name;
        const description = result.data.items[i].description ? result.data.items[i].description : '';
        const language = result.data.items[i].language ? result.data.items[i].language : '';

        if (description && language) {
            console.log(
                `${color.greenBold(id)}: ${fullName}\n`
                    + ' '.repeat((id + ': ').length)
                    + `Description: ${description}\n`
                    + ' '.repeat((id + ': ').length)
                    + `Language: ${language}\n`
                    + color.red('-'.repeat(Math.max(fullName.length, description.length, language.length))),
            );
        } else {
            console.log(
                `${color.greenBold(id)}: ${fullName}\n`
                    + ' '.repeat((id + ': ').length)
                    + `Description: ${description}\n`
                    + ' '.repeat((id + ': ').length)
                    + `Language: ${language}\n`
                    + color.red('-'.repeat((id + ': ' + fullName).length)),
            );
        }
    }
    for (; true;) {
        let answer = await question('Please input the id: ');

        if (Number(answer) > 0 && Number(answer) <= result.data.items.length) {
            open(result.data.items[Number(answer) - 1].html_url);
            rl.close();
            break;
        } else {
            console.log(color.red('Invalid input!'));
        }
    }
}
