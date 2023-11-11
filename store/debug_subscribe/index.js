import { subscribe } from '../subscribe/index.js'
/** @typedef {import('svelte/store').Readable}Readable */
/** @typedef {import('svelte/store').Unsubscriber}Unsubscriber */
/**
 * Logs (console.debug) changes to a store
 * @param {Readable}store
 * @param {string}label
 * @return {Unsubscriber}
 */
export function debug_subscribe(store, label) {
	try {
		return subscribe(store, (value)=>{
			console.debug(label, value)
		})
	} catch (err) {
		console.error(`Error: ${label}`)
		throw err
	}
}
export { debug_subscribe as subscribe__debug }
