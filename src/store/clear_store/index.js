import { each } from '@ctx-core/array'
import { wrap_a_ } from '@ctx-core/function'
/** @typedef {import('svelte/store').Readable}Readable */
/**
 * Sets each store with val
 * @param {Readable|Readable[]}stores
 * @param {unknown}val
 */
export function clear_store(
	stores,
	val
) {
	const store_a = wrap_a_(stores)
	each(store_a, (store)=>store.set(val))
}
export { clear_store as clear__store }
