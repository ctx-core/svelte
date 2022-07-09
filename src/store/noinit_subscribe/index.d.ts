import type { Readable, Subscriber, Unsubscriber } from 'svelte/store'
/**
 * Subscribes the run to store but does not have the initial call.
 */
export declare function noinit_subscribe<Val extends unknown = unknown>(store:Readable<Val>, run:Subscriber<Val>):Unsubscriber;
export { noinit_subscribe as subscribe__noinit }
