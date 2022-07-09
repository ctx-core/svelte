import type { PreprocessorGroup, Processed } from 'svelte/types/compiler/preprocess/index.js'
export declare function preprocess_(preprocess_a:PreprocessorGroup[]):preprocess_T
export declare type compose_preprocess_a_key_return_T = (preprocess_opts:(MarkupPreprocessor_options_T|Preprocessor_options_T))=>Promise<Processed|undefined>
export interface MarkupPreprocessor_options_T {
	content:string;
	filename:string;
}
export interface Preprocessor_options_T {
	/**
	 * The script/style tag content
	 */
	content:string;
	attributes:Record<string, string|boolean>;
	/**
	 * The whole Svelte file content
	 */
	markup:string;
	filename?:string;
}
export interface preprocess_T {
	markup(preprocess_opts:object):Promise<Processed>;
	script(preprocess_opts:object):Promise<Processed>;
	style(preprocess_opts:object):Promise<Processed>;
}
export declare type preprocess_type = preprocess_T;
export declare type PreprocessOptions = preprocess_T;
export {
	preprocess_ as _preprocess,
	preprocess_ as compose_preprocess_a1_key,
	preprocess_ as compose__a1__preprocess,
}
