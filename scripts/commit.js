const childProcess = require('child_process');
const process = require('process');
const readline = require('readline');

const { Constants } = require('./constants');
const { Color } = require('./utils');

const constants = new Constants();
const color = new Color();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Commit {
    constructor() {
        this.type = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'];
    }

    question(query) {
        return new Promise(function(resolve) {
            return rl.question(query, function(answer) {
                return resolve(answer);
            });
        });
    }

    async exec() {
        const value = await constants.getConstants();
        let answer;
        let answer2;
        let answer3;
        let answer4;

        console.log(color.greenBold('\nBuilding ' + value[0] + ' ' + value[2]));
        childProcess.exec('git add --all');

        for (; true;) {
            let type = '(';

            for (let i = 0; i < this.type.length; i++) {
                if (i !== this.type.length - 1) {
                    type += this.type[i] + ', ';
                } else {
                    type += this.type[i];
                }
            }

            type = type + ')';
            answer = await this.question(`Please input your commit type ${color.green(type)}\n: `);

            if (this.type.indexOf(answer) !== -1) {
                break;
            }
        }

        answer2 = await this.question('Please input your commit scope: ');

        if (answer2 !== '') {
            answer2 = '(' + answer2 + ')';
        }

        for (; true;) {
            answer3 = await this.question('Please input your commit message: ');
            if (answer3.trim().length !== 0) {
                break;
            }
        }

        console.log(`${color.green(answer)}${color.green(answer2)}: ${color.green(answer3.trim())}`);
        answer4 = await this.question(`Are you sure to git commit? (${color.green('y')}/${color.red('N')}) `);

        if (answer4.toLowerCase() === 'y') {
            childProcess.exec(`git commit -m "${answer}${answer2}: ${answer3.trim()}"`);
        }

        rl.close();
    }
}

const commit = new Commit();

function main() {
    commit.exec();
}

main();
