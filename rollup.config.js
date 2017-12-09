/*eslint-env node */
'use strict';

const nodeResolve = require('rollup-plugin-node-resolve');
const buble = require('rollup-plugin-buble');

const pkg = require('./package.json');

const banner = `/*!
 * ${dtst} - ${includes basic data structures with basic functionalities}
 * @version v${0.0.1}
 */
`;

module.exports = {
  entry: 'lib/index.js',
  banner,
  format: 'iife',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      preferBuiltins: false
    }),
    buble()
  ],
  moduleName: 'dtst',
  globals: {
    root: 'this' 
  }
};
