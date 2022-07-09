import type { Writable } from 'svelte/store'
/**
 * Sets each store with val
 */
export declare function clear_store<Val extends unknown = unknown>(stores:Writable<Val>|Writable<Val>[], val:Val):void;
export { clear_store as clear__store }
