export function preprocess_(preprocess_a:Partial<preprocess_T>[]):preprocess_T {
	return {
		markup: compose_preprocess_a_key('markup', preprocess_a),
		script: compose_preprocess_a_key('script', preprocess_a),
		style: compose_preprocess_a_key('style', preprocess_a),
	} as preprocess_T
}
function compose_preprocess_a_key(key:keyof preprocess_T, preprocess_a:Partial<preprocess_T>[]) {
	return async (preprocess_opts = {})=>{
		for (let i = 0; i < preprocess_a.length; i++) {
			const fn = preprocess_a[i][key]
			const map_code_ctx = fn && await fn(preprocess_opts)
			if (map_code_ctx) return map_code_ctx
		}
	}
}
export interface map_code_ctx_T {
	code:string|Buffer
	map?:string
}
export type map_code_ctx_type = map_code_ctx_T
export interface preprocess_T {
	markup(preprocess_opts:object):Promise<map_code_ctx_T>
	script(preprocess_opts:object):Promise<map_code_ctx_T>
	style(preprocess_opts:object):Promise<map_code_ctx_T>
}
export type preprocess_type = preprocess_T
export type PreprocessOptions = preprocess_T
export {
	preprocess_ as _preprocess,
	preprocess_ as compose_preprocess_a1_key,
	preprocess_ as compose__a1__preprocess,
}
