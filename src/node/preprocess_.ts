import type { MarkupPreprocessor, Preprocessor, PreprocessorGroup, Processed } from 'svelte/types/compiler/preprocess'
export function preprocess_(preprocess_a:PreprocessorGroup[]):preprocess_T {
	return {
		markup: compose_preprocess_a_key('markup', preprocess_a),
		script: compose_preprocess_a_key('script', preprocess_a),
		style: compose_preprocess_a_key('style', preprocess_a),
	} as preprocess_T
}
function compose_preprocess_a_key(
	key:keyof preprocess_T, preprocess_a:PreprocessorGroup[]
):compose_preprocess_a_key_return_T {
	return async (preprocess_opts:(MarkupPreprocessor_options_T|Preprocessor_options_T)):Promise<Processed|undefined>=>{
		for (let i = 0; i < preprocess_a.length; i++) {
			const fn = preprocess_a[i][key]
			if (fn) {
				let processed:Processed|undefined
				if (key === 'markup') {
					processed = await (fn as MarkupPreprocessor)(preprocess_opts as MarkupPreprocessor_options_T)
				} else {
					processed = await (fn as Preprocessor)(preprocess_opts as Preprocessor_options_T)
				}
				if (processed) return processed
			}
		}
		return
	}
}
export type compose_preprocess_a_key_return_T =
	(preprocess_opts:(MarkupPreprocessor_options_T|Preprocessor_options_T))=>
		Promise<Processed|undefined>
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
	markup(preprocess_opts:object):Promise<Processed>
	script(preprocess_opts:object):Promise<Processed>
	style(preprocess_opts:object):Promise<Processed>
}
export type preprocess_type = preprocess_T
export type PreprocessOptions = preprocess_T
export {
	preprocess_ as _preprocess,
	preprocess_ as compose_preprocess_a1_key,
	preprocess_ as compose__a1__preprocess,
}
