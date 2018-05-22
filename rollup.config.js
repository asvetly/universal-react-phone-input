import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'browser',
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'Example',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'lodash',
    'react',
    'react-dom',
    'prop-types',
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    filesize(),
  ],
};
