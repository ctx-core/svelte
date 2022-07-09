import type { Readable, Unsubscriber } from 'svelte/store'
/**
 * Logs (console.debug) changes to a store
 */
export declare function debug_subscribe<Val extends unknown = unknown>(store:Readable<Val>, label:string):Unsubscriber;
export { debug_subscribe as subscribe__debug }
