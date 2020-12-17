/// <reference types="node" />
export declare function _preprocess(preprocess_a1: any): preprocess_type;
export declare const compose_preprocess_a1: typeof _preprocess;
export declare const compose__a1__preprocess: typeof _preprocess;
export interface map_code_ctx_type {
    code: string | Buffer;
    map?: string;
}
export interface preprocess_type {
    markup(preprocess_opts: object): Promise<map_code_ctx_type>;
    script(preprocess_opts: object): Promise<map_code_ctx_type>;
    style(preprocess_opts: object): Promise<map_code_ctx_type>;
}
export declare function _preprocess_compiled_src(): {
    style: ({ content, attributes, filename }: {
        content?: string | undefined;
        attributes: any;
        filename: any;
    }) => {
        code: string;
        map: null;
    } | undefined;
    script: ({ content, attributes, filename }: {
        content?: string | undefined;
        attributes: any;
        filename: any;
    }) => {
        code: string;
        map: null;
    } | undefined;
};
export declare type PreprocessOptions = preprocess_type;
export { _preprocess_compiled_src as _preprocess__src__compiled, };
