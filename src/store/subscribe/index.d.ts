import type { Readable, Subscriber, Unsubscriber } from 'svelte/store'
import type { StoresValues } from '../_types'
import type { Invalidator } from '../_types'
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
