'use strict';

const Benchmark = require('benchmark');
const chalk = require('chalk');
const fs = require('fs');
const os = require('os');
const path = require('path');

const normalPath = path.join(__dirname, 'testfile.txt');
const uncPath = `\\\\?\\${normalPath}`;

function readWriteFile(filePath) {
  fs.statSync(filePath);
  fs.accessSync(filePath, fs.R_OK | fs.W_OK);
}

var suite = new Benchmark.Suite();

console.log(chalk.green(`Node.js version: ${process.version}`));
console.log(chalk.green(`Process architecture: ${os.arch()}`));
console.log(chalk.green(`Windows OS version: ${os.release()}`));

suite
.add('UNC path time', function() {
  readWriteFile(uncPath);
})
.add('normal path time', function() {
  readWriteFile(normalPath);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(`Fastest is ${this.filter('fastest').map('name')}`);
})
.run({ 'async': true });
