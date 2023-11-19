import { writable } from 'svelte/store'
import { mix_set_readable_ } from '../mix_set_readable_/index.js'
/** @typedef {import('svelte/store').Writable} */
/** @typedef {import('../_types/index.d.ts').StartStopNotifier} */
/** @typedef {import('./index.d.ts').Writable_} */
/**
 * @param {unknown}value
 * @param {StartStopNotifier}[start]
 * @returns {Writable_}
 * @private
 */
export function writable_(value, start) {
	const store = writable(value, start)
	return /** @typedef {Writable_} */mix_writable_(store)
}
/**
 * @param {Writable}store
 * @returns {mix_set_readable_T}
 * @private
 */
export function mix_writable_(store) {
	return mix_set_readable_(store)
}
export { writable_ as writable$ }
