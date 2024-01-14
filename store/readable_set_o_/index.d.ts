import type { Readable, readable, Subscriber } from 'svelte/store'
export declare function readable_set_o_<
	Val = unknown
>(
	initial:Val,
	readable_fn?:typeof readable
):readable_set_o_T<Val>
export declare type readable_set_o__set_T<
	Val = unknown
> = Subscriber<Val>
export interface readable_set_o_T<
	Val = unknown
> {
	store:Readable<Val>
	set:readable_set_o__set_T<Val>
}
export {
	readable_set_o_ as readable_set_ctx_,
	readable_set_o_T as readable_set_ctx_T,
	readable_set_o_ as _readable_set_ctx,
	readable_set_o__set_T as readable_set_ctx$_T,
}
