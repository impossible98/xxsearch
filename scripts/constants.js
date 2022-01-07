const fs = require('fs/promises');
const path = require('path');

class Constants {
    constructor() {
        this.namePath = path.join(__dirname, '..', 'src', 'constants', 'name.ts');
        this.versionPath = path.join(__dirname, '..', 'src', 'constants', 'version.ts');
        this.pkgPath = path.join(__dirname, '..', 'package.json');
        this.pkgLockPath = path.join(__dirname, '..', 'package-lock.json');
    }

    async getConstants() {
        const data = await fs.readFile('Makefile', {
            encoding: 'utf-8',
        });
        let appName = data.match(/APP_NAME := (.*)/)[1];
        let binName = data.match(/BIN_NAME := (.*)/)[1];
        let version = data.match(/APP_VERSION := (.*)/)[1];
        let constants = [appName, binName, version];
        return constants;
    }

    async write() {
        const constants = await this.getConstants();
        const pkg = await fs.readFile(this.pkgPath, {
            encoding: 'utf-8',
        });
        const pkgLock = await fs.readFile(this.pkgLockPath, {
            encoding: 'utf-8',
        });

        await fs.writeFile(
            this.namePath,
            `export const appName = '${constants[0]}';
export const binName = '${constants[1]}';
`,
        );
        await fs.writeFile(
            this.versionPath,
            `export const version = '${constants[2]}';
`,
        );
        await fs.writeFile(
            this.pkgPath,
            pkg.replace(
                /"version": "(.*)",/g,
                `"version": "${constants[2]}",`,
            ),
        );
        await fs.writeFile(
            this.pkgLockPath,
            pkgLock.replace(
                /\n    "version": "(.*)"/,
                `\n    "version": "${constants[2]}"`,
            ),
        );
    }
}

function main() {
    const constants = new Constants();
    constants.write();
}

main();

module.exports = {
    Constants,
};
