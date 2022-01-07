const { Constants } = require('./constants');

const constants = new Constants();

class All {
    async print() {
        const value = await constants.getConstants();
        console.log('Building ' + value[0] + ' ' + value[2]);
        console.log('Show help in `make help`');
    }
}

function main() {
    const all = new All();
    all.print();
}

main();
