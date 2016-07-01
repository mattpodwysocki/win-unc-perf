# win-unc-perf -  Windows UNC Path vs Normal Path Benchmarks

This module is a benchmark for using Windows UNC paths which get around the `MAX_PATH` issues with a hard coded limit of 260 characters.  This executes a series of `fs` operations in Node.js including the following:
- Get file stats via `fs.statSync`
- Get the file access via `fs.accessSync`

# Usage

## Installation

You can install this package via NPM with the following:
```bash
npm install win-unc-perf -g
```

## Running the benchmarks

You can run the benchmarks yourself by simply running:

```
$ win-unc-perf
Node.js version: v6.2.2
Process architecture: x64
Windows OS version: 10.0.14376
UNC path time x 19,939 ops/sec ±1.13% (78 runs sampled)
normal path time x 20,062 ops/sec ±1.50% (89 runs sampled)
Fastest is normal path time
```

# LICENSE

The MIT License (MIT)

Copyright (c) 2016 Matthew Podwysocki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

