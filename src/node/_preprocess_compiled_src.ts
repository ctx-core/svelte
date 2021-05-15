import { readFileSync, existsSync } from 'fs'
import { dirname, basename, join } from 'path'
export function _preprocess_compiled_src():preprocess_compiled_src_I {
	return {
		style: _fn('css'),
		script: _fn('js'),
	}
	function _fn(default_ext:string) {
		return ({ content = '', attributes, filename }:preprocess_compiled_src_fn2_params_I)=>{
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
export interface preprocess_compiled_src_fn2_params_I {
	content:string
	attributes:{ src?:string }
	filename:string
}
export interface preprocess_compiled_src_fn2_r_I {
	code:string
	map:null
}
export type preprocess_compiled_src_fn2_T =
	(params:preprocess_compiled_src_fn2_params_I)=>preprocess_compiled_src_fn2_r_I|void
export type preprocess_compiled_src_fn_T =
	(default_ext:string)=>preprocess_compiled_src_fn2_T
export interface preprocess_compiled_src_I {
	style:preprocess_compiled_src_fn2_T
	script:preprocess_compiled_src_fn2_T
}
export {
	_preprocess_compiled_src as _preprocess__src__compiled,
}
