export function preprocess_(preprocess_a) {
    return {
        markup: compose_preprocess_a_key('markup', preprocess_a),
        script: compose_preprocess_a_key('script', preprocess_a),
        style: compose_preprocess_a_key('style', preprocess_a),
    };
}
function compose_preprocess_a_key(key, preprocess_a) {
    return async (preprocess_opts = {}) => {
        for (let i = 0; i < preprocess_a.length; i++) {
            const fn = preprocess_a[i][key];
            const map_code_ctx = fn && await fn(preprocess_opts);
            if (map_code_ctx)
                return map_code_ctx;
        }
    };
}
export { preprocess_ as _preprocess, preprocess_ as compose_preprocess_a1_key, preprocess_ as compose__a1__preprocess, };
//# sourceMappingURL=../src/node/preprocess_.js.map