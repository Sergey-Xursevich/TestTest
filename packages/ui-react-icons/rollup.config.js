const babel = require("@rollup/plugin-babel");
const del = require("rollup-plugin-delete");
const pkg = require("./package.json");

module.exports = [
    {
        input: pkg.source,
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "esm" }
        ],
        plugins: [
            del({
                targets: ["dist/*"]
            }),
            babel({
                babelHelpers: "runtime",
                skipPreflightCheck: true
            }),
            del({
                targets: "build/*",
                hook: "buildEnd"
            })
        ],
    }
];
