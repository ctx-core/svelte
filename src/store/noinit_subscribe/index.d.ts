import type { Readable, Subscriber, Unsubscriber } from 'svelte/store'
import type { StoresValues } from '../_types'
/**
 * Subscribes the run to store but does not have the initial call.
 */
export declare function noinit_subscribe<
	Store extends Readable<unknown>
>(
	store:Store,
	run:Subscriber<StoresValues<Store>>
):Unsubscriber
export { noinit_subscribe as subscribe__noinit }
