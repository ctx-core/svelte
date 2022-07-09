import type { Readable, readable, Subscriber } from 'svelte/store'
export declare function readable_set_ctx_<Val extends unknown = unknown>(initial:Val, readable_fn?:typeof readable):readable_set_ctx_T<Val>;
export declare type readable_set_ctx$_T<Val extends unknown = unknown> = Subscriber<Val>;
export interface readable_set_ctx_T<Val extends unknown = unknown> {
	store:Readable<Val>;
	set:readable_set_ctx$_T<Val>;
}
export { readable_set_ctx_ as _readable_set_ctx, }
