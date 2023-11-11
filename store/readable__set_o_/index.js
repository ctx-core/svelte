import { readable } from 'svelte/store'
import { mix_readable_ } from '../readable_/index.js'
import { readable_set_o_ } from '../readable_set_o_/index.js'
/** @typedef {import('../readable_set_o_').readable_set_o_T}readable_set_o_T */
/**
 * @param {unknown}[ready]
 * @param {typeof readable}[readable_fn]
 * @returns {readable_set_o_T}
 * @private
 */
export function readable__set_o_(
	ready = false,
	readable_fn = readable
) {
	const { store, set } =
		readable_set_o_(ready, readable_fn)
	const store_ = mix_readable_(store)
	return {
		store: store_,
		set
	}
}
export {
	readable__set_o_ as ready,
	readable__set_o_ as readable__set_ctx_,
	readable__set_o_ as readable$_set_ctx_,
	readable__set_o_ as _readable_set_ctx$,
}
