import { derived } from '../derived/index.js'
import { mix_readable_ } from '../readable_/index.js'
export function derived_(stores, in_fn, initial_value) {
	const store = derived(stores, in_fn, initial_value)
	return mix_readable_(store)
}
export { derived_ as derived$ }
