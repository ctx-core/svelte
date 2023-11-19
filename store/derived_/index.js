import { derived } from '../derived/index.js'
import { mix_readable_ } from '../readable_/index.js'
/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('../_types/index.d.ts').Stores} */
/** @typedef {import('./index.d.ts').derived_in_fn_T} */
/**
 * @param {Stores}stores
 * @param {derived_in_fn_T}fn
 * @param {unknown}initial_value
 * @returns {Readable}
 * @private
 */
export function derived_(
	stores,
	fn,
	initial_value
) {
	const store =
		derived(stores, fn, initial_value)
	return mix_readable_(store)
}
export { derived_ as derived$ }
