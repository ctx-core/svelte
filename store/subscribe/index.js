/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('svelte/store').Subscriber} */
/** @typedef {import('svelte/store').Unsubscriber} */
/** @typedef {import('../_types/index.d.ts').Invalidator} */
/**
 * Delegates to store.subscribe
 * @param {Readable}store
 * @param {Subscriber}run
 * @param {Invalidator}[invalidate]
 * @returns {Unsubscriber}
 */
export function subscribe(store, run, invalidate) {
	return store.subscribe(run, invalidate)
}
