import type { Be, be_config_T, Ctx } from '@ctx-core/object'
import type { Readable, Stores, StoresValues } from 'svelte/store'
import type { Readable_ } from '../readable_/index.js'
export declare function be_readable_pair_<
	val_T,
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends Ctx = Ctx
>(be:Be<readable_T>):be_readable_pair_T<val_T, readable_T, ctx_T>
export declare function be_readable_pair_<
	val_T,
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends Ctx = Ctx,
	stores_T extends Stores = Stores,
>(
	stores_:(ctx:ctx_T)=>stores_T,
	val__new:(store_values:StoresValues<stores_T>)=>val_T,
	config?:be_config_T
):be_readable_pair_T<val_T, readable_T, ctx_T>
export {
	be_readable_pair_ as be_derived_pair_
}
export type be_readable_pair_T<
	val_T,
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<readable_T>,
	(ctx:ctx_T)=>val_T
]
export type be_derived_pair_T<
	val_T,
	readable_T extends Readable<val_T> = Readable_<val_T>,
	ctx_T extends Ctx = Ctx
> = be_readable_pair_T<val_T, readable_T, ctx_T>
