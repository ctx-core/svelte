import type { Be, be_config_arg_a_T, wide_ctx_T } from 'ctx-core/be'
import type { Readable, Stores, StoresValues } from 'svelte/store'
import type { Readable_ } from '../readable_/index.js'
export declare function be_readable_pair_<
	val_T,
	ns_T extends string = '',
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be:Be<readable_T, ns_T, ctx_T>):be_readable_pair_T<val_T, ns_T, readable_T, ctx_T>
export declare function be_readable_pair_<
	val_T,
	ns_T extends string = '',
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
	stores_T extends Stores = Stores,
>(
	stores_:(ctx:ctx_T)=>stores_T,
	val__new:(store_values:StoresValues<stores_T>)=>val_T,
	...config:be_config_arg_a_T<ns_T>
):be_readable_pair_T<val_T, ns_T, readable_T, ctx_T>
export {
	be_readable_pair_ as be_derived_pair_
}
export type be_readable_pair_T<
	val_T,
	ns_T extends string = '',
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	Be<readable_T, ns_T, ctx_T>,
	(ctx:ctx_T)=>val_T
]
export type be_derived_pair_T<
	val_T,
	ns_T extends string = '',
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = be_readable_pair_T<val_T, ns_T, readable_T, ctx_T>
