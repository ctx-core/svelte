import type { Writable } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
/**
 * Calls set on the given store with the given val
 */
export declare function set<
	Store extends Writable<unknown>
>(
	store:Store,
	val:StoresValues<Store>
):void
