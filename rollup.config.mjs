import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  /node_modules/,
];

export default [
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        declarationDir: null,
        sourceMap: true,
      }),
    ],
    external: external,
  },

  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        declarationDir: null,
        sourceMap: true,
        target: "ES2016",
        // module: 'CommonJS'
      }),
    ],
    external: external,
  },
];
