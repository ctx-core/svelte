import type { Be, Ctx } from '@ctx-core/object'
import type { Writable } from 'svelte/store'
import type { Writable_ } from '../writable_/index.js'
export declare function be_writable_triple_<
	val_T,
	writable_T extends Writable<val_T> = Writable_<val_T>,
	ctx_T extends Ctx = Ctx
>(val__new:(ctx:ctx_T)=>val_T):be_writable_triple_T<val_T, writable_T, ctx_T>
export type be_writable_triple_T<
	val_T,
	writable_T extends Writable<val_T> = Writable_<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<writable_T>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void
]&{
	config:(config__fn:(be:Be<writable_T>)=>unknown)=>be_writable_triple_T<val_T, writable_T, ctx_T>
	oninit__def:(oninit:(rmemo:writable_T)=>unknown)=>be_writable_triple_T<val_T, writable_T, ctx_T>
}
