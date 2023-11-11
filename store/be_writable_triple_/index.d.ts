import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { Writable } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
import type { Writable_ } from '../writable_/index.js'
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):be_writable_triple_T<A, ctx_T>
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_writable_triple_T<A, ctx_T>
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	writable__new:(ctx:ctx_T)=>A,
	be__params?:be__params_T
):be_writable_triple_T<A, ctx_T>
export declare function be_writable_triple_<
	A extends Writable<unknown> = Writable_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	writable__new?:((ctx:ctx_T)=>A),
	be__params?:be__params_T
):be_writable_triple_T<A, ctx_T>
export type be_writable_triple_T<
	A extends Writable<unknown> = Writable_<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<A>,
	(ctx:ctx_T)=>StoresValues<A>,
	(ctx:ctx_T, val:StoresValues<A>)=>void
]
