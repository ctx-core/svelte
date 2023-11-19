/** @typedef {import('svelte/store').Writable} */
/**
 * @param {Writable}store
 * @param {unknown}val
 */
export function set(store, val) {
	store.set(val)
}
