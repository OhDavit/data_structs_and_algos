/*eslint-env node */
'use strict';

const nodeResolve = require('rollup-plugin-node-resolve');
const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');

const pkg = require('./package.json');

module.exports = {
  entry: 'lib/index.js',
  format: 'iife',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false
    }),
    commonjs({}),
    buble()
  ],
  moduleName: 'dslight'
};
