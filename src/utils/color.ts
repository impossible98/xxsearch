class Color {
    blue(input: string) {
        return '\x1b[34m' + input + '\x1b[0m';
    }

    green(input: string) {
        return '\x1b[32m' + input + '\x1b[0m';
    }

    greenBold(input: string) {
        return '\x1b[1m\x1b[32m' + input + '\x1b[0m';
    }

    red(input: string) {
        return `\x1b[31m${input}\x1b[0m`;
    }
}

export { Color };
