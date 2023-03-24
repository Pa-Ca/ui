import typescript from "rollup-plugin-typescript2"
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs"
import html from "@rollup/plugin-html";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import analyze from "rollup-plugin-analyzer";
import scss from 'rollup-plugin-scss'

const { TARGET_ENV } = process.env;

export default {
  input: './src/index.tsx',
  output: [
    {
      file: './dist/bundle.js',
      format: 'iife',
      sourcemap: true,
      name: 'bundle'
    }
  ],
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify (
          TARGET_ENV === 'production' ? 'production' : 'development'
      )
    }),
    terser(),
    scss({
      output: 'dist/listree.min.css',
      outputStyle: "compressed"
    }),
    commonjs(),
    resolve(),
    typescript(),
    html(),
    analyze({
      hideDeps: true,
      summaryOnly: true
    })
  ]
}