import type { Writable } from 'svelte/store'
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export declare function set_store_<Val extends unknown = unknown>(store:Writable<Val>, setter?:(v:Val)=>Val):set_store_T<Val>;
export declare type set_store_T<Val extends unknown = unknown> = (val:Val)=>void;
export { set_store_ as _set_store, set_store_ as _set__store, }
