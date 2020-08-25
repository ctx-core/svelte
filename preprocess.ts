import { readFileSync, existsSync } from 'fs'
import { dirname, basename, join } from 'path'
export type PreprocessOptions = Record<string, (...args:any[])=>void>
export function _preprocess(a1__preprocess):PreprocessOptions {
	return {
		markup: compose_preprocess_a1_key('markup', a1__preprocess),
		script: compose_preprocess_a1_key('script', a1__preprocess),
		style: compose_preprocess_a1_key('style', a1__preprocess),
	}
}
export const compose_preprocess_a1 = _preprocess
export const compose__a1__preprocess = _preprocess
function compose_preprocess_a1_key(key, a1__preprocess) {
	return async (opts__preprocess = {})=>{
		for (let i = 0; i < a1__preprocess.length; i++) {
			const fn = a1__preprocess[i][key]
			const ctx__code__map = fn && await fn(opts__preprocess)
			if (ctx__code__map) return ctx__code__map
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
				const filename__base = join(dirname(filename), src)
				const filename__full =
					existsSync(`${filename__base}.${default_ext}`)
					? `${filename__base}.${default_ext}`
					: existsSync(`${basename(filename__base)}.${default_ext}`)
						? `${basename(filename__base)}.${default_ext}`
						: existsSync(filename__base)
							? filename__base
							: null
				if (!filename__full) return
				content = `${readFileSync(filename__full).toString()}\n${content}`
				return {
					code: content,
					map: null,
				}
			}
		}
	}
}
export const _preprocess__src__compiled = _preprocess_compiled_src
