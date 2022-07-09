import { mix_set_readable } from '../mix_set_readable/index.js'
import { writable_fn_ } from '../writable_fn_/index.js'
export function mix_set_readable_(store, set) {
	if (set) {
		mix_set_readable(store, set)
	}
	const mix_set_readable_store = store
	if (!mix_set_readable_store.set) {
		throw `There must be a set function argument or store must have a set method`
	}
	return writable_fn_(mix_set_readable_store)
}
