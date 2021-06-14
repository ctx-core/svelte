/// <reference types="node" />
export declare function preprocess_(preprocess_a: Partial<preprocess_T>[]): preprocess_T;
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
export { preprocess_ as _preprocess, preprocess_ as compose_preprocess_a1_key, preprocess_ as compose__a1__preprocess, };
