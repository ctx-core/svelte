import { subscribe_wait } from '../subscribe_wait/index.js'
/** @typedef {import('svelte/store').Readable}Readable */
/** @typedef {import('./index.d.ts').subscribe_wait__condition_fn_T}subscribe_wait__condition_fn_T */
/**
 * @param {Readable}store
 * @param {subscribe_wait__condition_fn_T}condition_fn
 * @param {number}timeout
 * @returns {Promise<unknown>}
 */
export function subscribe_wait_timeout(
	store,
	condition_fn,
	timeout
) {
	return subscribe_wait(store, condition_fn, timeout)
}
export {
	subscribe_wait_timeout as subscribe_wait_for_timeout
}
