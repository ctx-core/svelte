import type { Writable } from 'svelte/store'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export declare function clear_store_<
	Val extends unknown = unknown
>(
	stores:Writable<Val>|Writable<Val>[],
	value:Val
):clear_store_T
export declare type clear_store_T = ()=>void
export {
	clear_store_ as _clear_store,
	clear_store_ as _clear__store,
}
