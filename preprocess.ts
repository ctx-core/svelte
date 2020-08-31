import { readFileSync, existsSync } from 'fs'
import { dirname, basename, join } from 'path'
export type PreprocessOptions = Record<string, (...args:any[])=>void>
export function _preprocess(preprocess_a1):PreprocessOptions {
	return {
		markup: compose_preprocess_a1_key('markup', preprocess_a1),
		script: compose_preprocess_a1_key('script', preprocess_a1),
		style: compose_preprocess_a1_key('style', preprocess_a1),
	}
}
export const compose_preprocess_a1 = _preprocess
export const compose__a1__preprocess = _preprocess
function compose_preprocess_a1_key(key, preprocess_a1) {
	return async (preprocess_opts = {})=>{
		for (let i = 0; i < preprocess_a1.length; i++) {
			const fn = preprocess_a1[i][key]
			const map_code_ctx = fn && await fn(preprocess_opts)
			if (map_code_ctx) return map_code_ctx
		}
	}
}
export function _preprocess_compiled_src() {
	return {
		style: _fn('css'),
		script: _fn('js'),
	}
	function _fn(default_ext) {
		return ({ content = '', attributes, filename })=>{
			const { src } = attributes
			if (src) {
				const base_filename = join(dirname(filename), src)
				const full_filename =
					existsSync(`${base_filename}.${default_ext}`)
					? `${base_filename}.${default_ext}`
					: existsSync(`${basename(base_filename)}.${default_ext}`)
						? `${basename(base_filename)}.${default_ext}`
						: existsSync(base_filename)
							? base_filename
							: null
				if (!full_filename) return
				content = `${readFileSync(full_filename).toString()}\n${content}`
				return {
					code: content,
					map: null,
				}
			}
		}
	}
}
export const _preprocess__src__compiled = _preprocess_compiled_src
