import { isNumber_ } from '@ctx-core/number'
import { promise_timeout } from '@ctx-core/function'
/** @typedef {import('svelte/store').Readable}Readable */
/** @typedef {import('svelte/store').Unsubscriber}Unsubscriber */
/** @typedef {import('./index.d.ts').subscribe_wait__condition_fn_T}subscribe_wait__condition_fn_T */
/**
 * @param {Readable}store
 * @param {subscribe_wait__condition_fn_T}condition_fn
 * @param [timeout]
 * @returns {Promise<unknown>}
 */
export function subscribe_wait(
	store,
	condition_fn,
	timeout = null
) {
	const _subscribe_wait =
		new Promise(resolve=>{
			let unsubscribe_oninit = false
			/** @type {Unsubscriber} */
			let unsubscribe // Need this to prevent ReferenceError
			unsubscribe = store.subscribe(val=>{
				if (condition_fn(val)) {
					if (unsubscribe) unsubscribe()
					else unsubscribe_oninit = true
					resolve(val)
				}
			})
			if (unsubscribe_oninit) unsubscribe()
		})
	return (
		isNumber_(timeout)
		? promise_timeout(_subscribe_wait, timeout)
		: _subscribe_wait)
}
export {
	subscribe_wait as subscribe_wait_for,
	subscribe_wait as wait_for__subscribe
}
