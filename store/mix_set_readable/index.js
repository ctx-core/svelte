import { assign } from '@ctx-core/object'
import { get } from '../get/index.js'
/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('../writable').Writable_set_T} */
/** @typedef {import('./index.d.ts').mix_set_readable_I} */
/**
 * @param {Readable}store
 * @param {Writable_set_T}set
 * @returns {mix_set_readable_I}
 */
export function mix_set_readable(store, set) {
	return assign(store, {
		set,
		update(updater) {
			set(updater(get(store)))
		}
	})
}
