/// <reference types="../writable/index.d.ts" />
/// <reference types="./index.d.ts" />
import { assign } from 'ctx-core/object'
import { get } from '../get/index.js'
/** @typedef {import('svelte/store').Readable} */
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
