import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { Readable } from 'svelte/store'
import type { StoresValues } from '../_types'
import type { Readable_ } from '../readable_'
export declare function be_derived_pair_<
	C extends Readable<unknown> = Readable_<unknown>
>(
	derived__new:(ctx:Ctx)=>C,
	be__params?:be__params_T
):be_derived_pair_T<C>
export declare function be_derived_pair_<
	C extends Readable<unknown> = Readable_<unknown>
>(
	name:string|null|undefined,
	derived__new:((ctx:Ctx)=>C),
	be__params?:be__params_T
):be_derived_pair_T<C>
export type be_derived_pair_T<
	C extends Readable<unknown> = Readable_<unknown>
> = [
	Be<C>,
	(ctx:Ctx)=>StoresValues<C>
]
