import { get as in_get } from 'svelte/store'
/** @typedef {import('../readable/index.d.ts').Readable} */
/**
 * @param {Readable}store
 * @return {unknown}
 */
export function get(store) {
	return in_get(store)
}
