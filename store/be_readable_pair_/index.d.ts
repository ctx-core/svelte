import type { Be, be__config_params_T, be__val__new_T, Ctx } from '@ctx-core/object'
import type { Readable } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
import type { Readable_ } from '../readable_/index.js'
export declare function be_readable_pair_<
	readable_T extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
>(readable__new:be__val__new_T<readable_T>):be_readable_pair_T<readable_T, ctx_T>
export {
	be_readable_pair_ as be_derived_pair_
}
export type be_readable_pair_T<
	readable_T extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<readable_T>,
	(ctx:ctx_T)=>StoresValues<readable_T>
]&{
	config:(params:be__config_params_T)=>be_readable_pair_T<readable_T, ctx_T>
	oninit:(fn:(ctx:Ctx, rmemo:readable_T)=>unknown)=>be_readable_pair_T<readable_T, ctx_T>
}
export type be_derived_pair_T<
	readable_T extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
> = be_readable_pair_T<readable_T, ctx_T>
