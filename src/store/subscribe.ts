import type { Unsubscriber } from 'svelte/store'
import type { Subscriber } from './Subscriber.js'
import type { Invalidator } from './Invalidator.js'
import type { Readable } from './readable.js'
/**
 * Delegates to store.subscribe
 */
export function subscribe<Val extends unknown = unknown>(
	store:Readable<Val>,
	run:Subscriber<Val>,
	invalidate?:Invalidator<Val>
) {
	return store.subscribe(run, invalidate) as Unsubscriber
}
