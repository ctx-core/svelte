import { mix_refresh } from '../mix_refresh/index.js'
import { writable_ } from '../writable_/index.js'
/** @typedef {import('../_types/index.d.ts').refresh_writable_T}refresh_writable_T */
/**
 * @param {unknown}init
 * @returns {refresh_writable_T}
 * @private
 */
export function refresh_writable_(init) {
	return mix_refresh(writable_(init))
}
