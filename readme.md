# parse-gurobi-solution

Parse [.sol solution files](https://www.gurobi.com/documentation/8.0/refman/sol_format.html) generated by the [Gurobi](https://www.gurobi.com/) solver.

[![npm version](https://img.shields.io/npm/v/parse-gurobi-solution.svg)](https://www.npmjs.com/package/parse-gurobi-solution)
[![Build Status](https://travis-ci.org/juliuste/parse-gurobi-solution.svg?branch=master)](https://travis-ci.org/juliuste/parse-gurobi-solution)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/parse-gurobi-solution.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/parse-gurobi-solution.svg)](https://david-dm.org/juliuste/parse-gurobi-solution)
[![license](https://img.shields.io/github/license/juliuste/parse-gurobi-solution.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install parse-gurobi-solution
```

## Usage

The method exposed by this module takes a single `fileStream` parameter, which is a stream of your `.sol` solution file and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in an object with your variable names as keys.

```javascript
const fs = require('fs')
const parseGurobiSolution = require('parse-gurobi-solution')

const fileStream = fs.createReadStream('./solution.sol')
const solution = parseGurobiSolution(fileStream).then(console.log) // Promise
```

The following solution file example:

```
# Objective value = 3.6700000000001825e+02
a0 1
a1 2.128473937036380e-7
b0 3.1268
b1 2
xcoord 10
ycoord 0
lat 2.91256
```

would give you a `solution` object that looks as follows:

```js
{
    a0: 1,
    a1: 2.12847393703638e-7,
    b0: 3.1268,
    b1: 2,
    xcoord: 10,
    ycoord: 0,
    lat: 2.91256
}
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/parse-gurobi-solution/issues).
