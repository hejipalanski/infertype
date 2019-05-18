'use-strict'

const assert = require('assert');

const Type = require('../lib');

assert.strictEqual(Type.infer(undefined), 'undefined');
assert.strictEqual(Type.infer(null), 'null');
assert.strictEqual(Type.infer(1), 'number');
assert.strictEqual(Type.infer(''), 'string');
assert.strictEqual(Type.infer(true), 'boolean');
assert.strictEqual(Type.infer({}), 'object');
assert.strictEqual(Type.infer(Symbol()), 'symbol');

assert.strictEqual(Type.infer([]), 'Array');
assert.strictEqual(Type.infer(new Map()), 'Map');

let fn = () => {};
assert.strictEqual(Type.infer(fn), 'function');
let afn = async () => {};
assert.strictEqual(Type.infer(afn), 'AsyncFunction');
assert.strictEqual(Type.infer(/\d/g), 'RegExp');
assert.strictEqual(Type.infer(new Boolean()), 'Boolean');
assert.strictEqual(Type.infer(new Date()), 'Date');
assert.strictEqual(Type.infer(new Float32Array()), 'Float32Array');
assert.strictEqual(Type.infer(Promise.resolve()), 'Promise');
assert.strictEqual(Type.infer(new Error()), 'Error');
assert.strictEqual(Type.infer(module), 'Module');
assert.strictEqual(Type.infer(new Number(1)), 'Number');
assert.strictEqual(Type.infer(new String('')), 'String');

assert.strictEqual(Type.strictMatch(true, new Boolean('true')), false);
assert.strictEqual(Type.strictMatch(1, 1000), true);
assert.strictEqual(Type.strictMatch(1, new Number(100)), false);
assert.strictEqual(Type.strictMatch('', new String('')), false);

assert.strictEqual(Type.match(true, new Boolean('true')), true);
assert.strictEqual(Type.match(1, 1000), true);
assert.strictEqual(Type.match(1, new Number(100)), true);
assert.strictEqual(Type.match('', new String('')), true);
