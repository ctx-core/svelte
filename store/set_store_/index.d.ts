import type { Writable } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export declare function set_store_<
	Store extends Writable<unknown>
>(
	store:Store,
	setter?:(v:StoresValues<Store>)=>StoresValues<Store>
):set_store_T<StoresValues<Store>>
export declare type set_store_T<
	Val extends unknown = unknown
> = (val:Val)=>void
export {
	set_store_ as _set_store,
	set_store_ as _set__store,
}
