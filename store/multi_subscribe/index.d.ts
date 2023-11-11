import type { Readable, Unsubscriber } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a changes.
 */
export declare function multi_subscribe<
	Store extends Readable<unknown>
>(
	store_a:Store[],
	fn:((val_a:StoresValues<Store>[])=>void)
):Unsubscriber
export { multi_subscribe as subscribe__multi }
