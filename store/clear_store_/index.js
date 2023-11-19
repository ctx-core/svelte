import { clear_store } from '../clear_store/index.js'
/** @typedef {import('svelte/store').Writable} */
/** @typedef {import('svelte/store').Subscriber} */
/** @typedef {import('./index.d.ts').clear_store_T} */
/**
 * Returns a function that [clear_store](#clear_store).
 * @param {Writable|Writable[]}stores
 * @param {unknown}value
 * @return {clear_store_T}
 */
export function clear_store_(stores, value) {
	return ()=>clear_store(stores, value)
}
export {
	clear_store_ as _clear_store,
	clear_store_ as _clear__store,
}
