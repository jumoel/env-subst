#!/usr/bin/env node

const fs = require('fs');

const envsubst = require('./index.js');

if (process.argv.length < 3) {
	console.error('Usage: env-subst inputFile');
	process.exit(1);
}

const inputFile = process.argv[2];

if (!fs.existsSync(inputFile)) {
	console.error(`File ${inputFile} does not exist`);
	process.exit(1);
}

const fileContent = fs.readFileSync(inputFile).toString();

process.stdout.write(envsubst(fileContent));
