import type { Be, be_config_T, Ctx, ctx__be_T, ctx__get_T, ctx__set_T, Ctx_wide_T } from 'ctx-core/be'
import type { Writable } from 'svelte/store'
import type { Writable_ } from '../writable_/index.js'
export declare function be_writable_triple_<
	val_T,
	ns_T extends string = '',
	writable_T extends Writable<val_T> = Writable_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(be:Be<writable_T, ns_T, ctx_T>):be_writable_triple_T<val_T, ns_T, writable_T, ctx_T>
export declare function be_writable_triple_<
	val_T,
	ns_T extends string = '',
	writable_T extends Writable<val_T> = Writable_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	val__new:(ctx:ctx_T)=>val_T,
	config?:be_config_T<ns_T>
):be_writable_triple_T<val_T, ns_T, writable_T, ctx_T>
export type be_writable_triple_T<
	val_T,
	ns_T extends string = '',
	writable_T extends Writable<val_T> = Writable_<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
> = [
	ctx__be_T<writable_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>
]
