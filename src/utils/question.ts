import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(query: string) {
    return new Promise(function(resolve) {
        return rl.question(query, function(answer) {
            return resolve(answer);
        });
    });
}

export { question, rl };
