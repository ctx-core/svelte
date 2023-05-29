import type { Readable, Unsubscriber } from 'svelte/store'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a changes.
 */
export declare function multi_subscribe<
	Val extends unknown,
	Store extends Readable<any> = Readable<any>
>(
	store_a:Store[],
	fn:((val_a:Val[])=>void)
):Unsubscriber
export { multi_subscribe as subscribe__multi }
