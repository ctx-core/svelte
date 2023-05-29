import type { Writable } from 'svelte/store'
/**
 * Sets each store with val
 */
export declare function clear_store<
	Store extends Writable<unknown>
>(
	stores:Store|Store[],
	val:Writable<Store>
):void
export { clear_store as clear__store }
