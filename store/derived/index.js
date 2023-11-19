import { isArray, tup } from '@ctx-core/array'
import { derived as in_derived } from 'svelte/store'
/** @typedef {import('../_types/index.d.ts').Stores} */
/** @typedef {import('./index.d.ts').set_derived__fn_T} */
/**
 * @param {Stores}stores
 * @param {set_derived__fn_T}fn
 * @param {unknown}initial_value
 * @returns {Readable}
 */
export function derived(
	stores,
	fn,
	initial_value
) {
	return (
		fn.length === 1
			? in_derived(stores, (values)=>
				fn(
					isArray(values)
						? tup(...values)
						: values))
			: in_derived(
				stores,
				(values, set)=>
					fn(isArray(values)
						? tup(...values)
						: values, set),
				initial_value))
}
