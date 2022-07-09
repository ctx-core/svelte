export declare function preprocess_compiled_src_():preprocess_compiled_src_I;
export interface preprocess_compiled_src_fn2_params_I {
	content:string;
	attributes:{
		src?:string;
	};
	filename:string;
}
export interface preprocess_compiled_src_fn2_r_I {
	code:string;
	map:null;
}
export declare type preprocess_compiled_src_fn2_T = (params:preprocess_compiled_src_fn2_params_I)=>preprocess_compiled_src_fn2_r_I|void;
export declare type preprocess_compiled_src_fn_T = (default_ext:string)=>preprocess_compiled_src_fn2_T;
export interface preprocess_compiled_src_I {
	style:preprocess_compiled_src_fn2_T;
	script:preprocess_compiled_src_fn2_T;
}
export {
	preprocess_compiled_src_ as _preprocess_compiled_src,
	preprocess_compiled_src_ as _preprocess__src__compiled,
}
