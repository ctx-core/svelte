import type { Writable } from 'svelte/store'
import type { StoresValues } from '../_types'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export declare function clear_store_<
	Store extends Writable<unknown>
>(
	stores:Store|Store[],
	value:StoresValues<Store>
):clear_store_T
export declare type clear_store_T = ()=>void
export {
	clear_store_ as _clear_store,
	clear_store_ as _clear__store,
}
