import { readFileSync, existsSync } from 'fs';
import { dirname, basename, join } from 'path';
export function _preprocess_compiled_src() {
    return {
        style: _fn('css'),
        script: _fn('js'),
    };
    function _fn(default_ext) {
        return ({ content = '', attributes, filename }) => {
            const { src } = attributes;
            if (src) {
                const base_filename = join(dirname(filename), src);
                const full_filename = existsSync(`${base_filename}.${default_ext}`)
                    ? `${base_filename}.${default_ext}`
                    : existsSync(`${basename(base_filename)}.${default_ext}`)
                        ? `${basename(base_filename)}.${default_ext}`
                        : existsSync(base_filename)
                            ? base_filename
                            : null;
                if (!full_filename)
                    return;
                content = `${readFileSync(full_filename).toString()}\n${content}`;
                return {
                    code: content,
                    map: null,
                };
            }
        };
    }
}
export { _preprocess_compiled_src as _preprocess__src__compiled, };
