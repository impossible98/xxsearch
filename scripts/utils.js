class Color {
    blue(input) {
        return '\x1b[34m' + input + '\x1b[0m';
    }

    green(input) {
        return '\x1b[32m' + input + '\x1b[0m';
    }

    greenBold(input) {
        return '\x1b[1m\x1b[32m' + input + '\x1b[0m';
    }

    red(input) {
        return `\x1b[31m${input}\x1b[0m`;
    }
}

module.exports = {
    Color,
};
