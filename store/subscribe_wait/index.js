/// <reference types="./index.d.ts" />
import { promise_timeout } from 'ctx-core/function'
import { isNumber_ } from 'ctx-core/number'
/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('svelte/store').Unsubscriber} */
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
