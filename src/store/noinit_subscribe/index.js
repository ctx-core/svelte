import { subscribe } from '../subscribe/index.js'
/** @typedef {import('svelte/store').Readable}Readable */
/** @typedef {import('svelte/store').Subscriber}Subscriber */
/** @typedef {import('svelte/store').Unsubscriber}Unsubscriber */
/**
 * Subscribes the run to store but does not have the initial call.
 * @param {Readable}store
 * @param {Subscriber}run
 * @returns {Unsubscriber}
 */
export function noinit_subscribe(
	store,
	run
) {
	let beyond_init = false
	return subscribe(store, (...arg_a)=>{
		if (!beyond_init) {
			beyond_init = true
			return
		}
		return run(...arg_a)
	})
}
export { noinit_subscribe as subscribe__noinit }
