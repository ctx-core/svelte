/// <reference types="node" />
export declare function _preprocess(preprocess_a1: any): preprocess_T;
export interface map_code_ctx_T {
    code: string | Buffer;
    map?: string;
}
export declare type map_code_ctx_type = map_code_ctx_T;
export interface preprocess_T {
    markup(preprocess_opts: object): Promise<map_code_ctx_T>;
    script(preprocess_opts: object): Promise<map_code_ctx_T>;
    style(preprocess_opts: object): Promise<map_code_ctx_T>;
}
export declare type preprocess_type = preprocess_T;
export declare type PreprocessOptions = preprocess_T;
export { _preprocess as compose_preprocess_a1_key, _preprocess as compose__a1__preprocess, };
