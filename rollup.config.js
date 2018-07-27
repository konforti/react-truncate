import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'es',
    },
    plugins: [
        flow(),
        babel({
            exclude: 'node_modules/**',
        }),
        terser(),
    ],
};
