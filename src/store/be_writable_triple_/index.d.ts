import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { Writable } from 'svelte/store'
import type { StoresValues } from '../_types'
import type { Writable_ } from '../writable_'
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>
>(
	be__params?:be__params_T
):be_writable_triple_T<A>
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_writable_triple_T<A>
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>
>(
	writable__new:(ctx:Ctx)=>A,
	be__params?:be__params_T
):be_writable_triple_T<A>
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>
>(
	id?:string|null|undefined,
	writable__new?:((ctx:Ctx)=>A),
	be__params?:be__params_T
):be_writable_triple_T<A>
export type be_writable_triple_T<
	A extends Writable<unknown> = Writable_<unknown>
> = [
	Be<A>,
	(ctx:Ctx)=>StoresValues<A>,
	(ctx:Ctx, val:StoresValues<A>)=>void
]
