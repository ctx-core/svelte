export declare type PreprocessOptions = Record<string, (...args: unknown[]) => void>;
export declare function _preprocess(preprocess_a1: any): PreprocessOptions;
export declare const compose_preprocess_a1: typeof _preprocess;
export declare const compose__a1__preprocess: typeof _preprocess;
export declare function _preprocess_compiled_src(): {
    style: ({ content, attributes, filename }: {
        content?: string;
        attributes: any;
        filename: any;
    }) => {
        code: string;
        map: any;
    };
    script: ({ content, attributes, filename }: {
        content?: string;
        attributes: any;
        filename: any;
    }) => {
        code: string;
        map: any;
    };
};
export declare const _preprocess__src__compiled: typeof _preprocess_compiled_src;
