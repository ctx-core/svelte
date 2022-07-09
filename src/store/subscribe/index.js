/**
 * Delegates to store.subscribe
 */
export function subscribe(store, run, invalidate) {
	return store.subscribe(run, invalidate)
}
