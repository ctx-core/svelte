import { readable } from 'svelte/store'
import { get } from '../get/index.js'
/** @typedef {import('./index.d.ts').readable_set_o_T} */
/**
 * @param {unknown}initial
 * @param {typeof readable}[readable_fn]
 * @returns {readable_set_o_T}
 * @private
 */
export function readable_set_o_(
	initial,
	readable_fn = readable
) {
	let set = undefined
	const store = readable_fn(initial, (in_set)=>{
		set = in_set
	})
	get(store)
	return {
		store,
		set
	}
}
export {
	readable_set_o_ as readable_set_ctx_,
	readable_set_o_ as _readable_set_ctx,
}
