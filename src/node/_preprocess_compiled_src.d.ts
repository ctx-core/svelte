export declare function _preprocess_compiled_src(): preprocess_compiled_src_I;
export interface preprocess_compiled_src_fn2_opts_I {
    content: string;
    attributes: {
        src?: string;
    };
    filename: string;
}
export interface preprocess_compiled_src_fn2_r_I {
    code: string;
    map: null;
}
export declare type preprocess_compiled_src_fn2_T = (opts: preprocess_compiled_src_fn2_opts_I) => preprocess_compiled_src_fn2_r_I | void;
export declare type preprocess_compiled_src_fn_T = (default_ext: string) => preprocess_compiled_src_fn2_T;
export interface preprocess_compiled_src_I {
    style: preprocess_compiled_src_fn2_T;
    script: preprocess_compiled_src_fn2_T;
}
export { _preprocess_compiled_src as _preprocess__src__compiled, };
