import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { Readable } from 'svelte/store'
import type { StoresValues } from '../_types'
import type { Readable_ } from '../readable_'
export declare function be_readable_pair_<
	C extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	derived__new:(ctx:Ctx)=>C,
	be__params?:be__params_T
):be_readable_pair_T<C, ctx_T>
export declare function be_readable_pair_<
	C extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	name:string|null|undefined,
	derived__new:((ctx:ctx_T)=>C),
	be__params?:be__params_T
):be_readable_pair_T<C, ctx_T>
export {
	be_readable_pair_ as be_derived_pair_
}
export type be_readable_pair_T<
	C extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<C>,
	(ctx:ctx_T)=>StoresValues<C>
]
export type be_derived_pair_T<
	C extends Readable<unknown> = Readable_<unknown>,
	ctx_T extends Ctx = Ctx
> = be_readable_pair_T<C, ctx_T>
