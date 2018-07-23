'use strict'

const tape = require('tape')
const parseGurobiSolution = require('./index')
const round = require('lodash.round')
const fs = require('fs')

const round10 = x => round(x, 10)

tape('parse-gurobi-solution', async (t) => {
	const fileStream = fs.createReadStream('./test.sol')
	const solution = await parseGurobiSolution(fileStream)

	t.ok(solution)
	t.ok(typeof solution === 'object')
	t.ok(Object.keys(solution).length === 7)

	for (let key of Object.keys(solution)) t.ok(typeof solution[key] === 'number')

	t.ok(round10(solution.a0) === 1)
	t.ok(round10(solution.a1) === 0.0000002128)
	t.ok(round10(solution.b0) === 3.1268)
	t.ok(round10(solution.b1) === 2)
	t.ok(round10(solution.xcoord) === 10)
	t.ok(round10(solution.ycoord) === 0)
	t.ok(round10(solution.lat) === 2.91256)

	t.end()
})
