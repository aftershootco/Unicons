const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const typescript = require('@rollup/plugin-typescript')
const url = require('@rollup/plugin-url')
const postcssUrl = require('postcss-url')
const babel = require('rollup-plugin-babel')
const dts = require('rollup-plugin-dts')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')
const packageJson = require('./package.json')

module.exports = [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
			},
			{
				file: packageJson.module,
				format: 'esm',
			},
		],
		plugins: [
			resolve(),
			peerDepsExternal(),
			commonjs(),
			url(),
			postcss({
				minimize: true,
				modules: {
					generateScopedName: '[hash:base64:5]',
				},
			}),
			postcssUrl({
				url: 'inline',
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
			babel({
				exclude: ['node_modules/**'],
			}),
		],
	},

	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts.default()],
		external: [/\.scss$/],
	},
]
