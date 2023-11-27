import del from "rollup-plugin-delete";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const pkg = require("./package.json");

export default [
    {
        input: "lib/index.ts",
        output: [
            {
                file: pkg.main,
                format: "cjs"
            },
            {
                file: pkg.module,
                format: "esm"
            },
        ],
        plugins: [
            del({ targets: 'dist/*' }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            peerDepsExternal(),
            terser()
        ],
        external: ["react", "react-dom"]
    },
    {
        input: "lib/index.ts",
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts()],
    },
];