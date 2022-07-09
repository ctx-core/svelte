import { derived as in_derived } from 'svelte/store'
import { isArray, tup } from '@ctx-core/array'
export function derived(stores, in_fn, initial_value) {
	const fn = in_fn
	return in_fn.length === 1 ? in_derived(stores, (values)=>{
		return fn(isArray(values) ? tup(...values) : values)
	}) : in_derived(stores, (values, set)=>{
		return fn(isArray(values) ? tup(...values) : values, set)
	}, initial_value)
}
