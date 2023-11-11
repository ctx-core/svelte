import type { Readable, Subscriber, Unsubscriber } from 'svelte/store'
import type { Invalidator, StoresValues } from '../_types/index.js'
/**
 * Delegates to store.subscribe
 */
export declare function subscribe<
	Store extends Readable<unknown>
>(
	store:Store,
	run:Subscriber<StoresValues<Store>>,
	invalidate?:Invalidator<StoresValues<Store>>
):Unsubscriber
