export function _preprocess(preprocess_a1):preprocess_T {
	return {
		markup: compose_preprocess_a1_key('markup', preprocess_a1),
		script: compose_preprocess_a1_key('script', preprocess_a1),
		style: compose_preprocess_a1_key('style', preprocess_a1),
	} as preprocess_T
}
function compose_preprocess_a1_key(key, preprocess_a1) {
	return async (preprocess_opts = {})=>{
		for (let i = 0; i < preprocess_a1.length; i++) {
			const fn = preprocess_a1[i][key]
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
	_preprocess as compose_preprocess_a1_key,
	_preprocess as compose__a1__preprocess,
}