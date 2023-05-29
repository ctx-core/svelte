import type { Readable, Unsubscriber } from 'svelte/store'
/**
 * Logs (console.debug) changes to a store
 */
export declare function debug_subscribe<
	Store extends Readable<unknown> = Readable<unknown>
>(store:Store, label:string):Unsubscriber
export { debug_subscribe as subscribe__debug }
