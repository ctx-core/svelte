import type { Readable, Subscriber, Unsubscriber } from 'svelte/store'
import type { Invalidator } from '../_types'
/**
 * Delegates to store.subscribe
 */
export declare function subscribe<
	Val extends unknown = unknown
>(
	store:Readable<Val>,
	run:Subscriber<Val>,
	invalidate?:Invalidator<Val>
):Unsubscriber
