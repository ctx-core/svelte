/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { derived_ } from '../derived_/index.js'
/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('svelte/store').Stores} */
/**
 *
 * @param {Be<Readable>|Stores}be_OR_stores_
 * @param {be__val__new_T<unknown>}[val__new]
 * @param {be_config_T}[config]
 * @returns {be_readable_pair_T}
 * @private
 */
export function be_readable_pair_(be_OR_stores_, val__new, config) {
	/** @type {Be<Readable>} */
	let be =
		be_OR_stores_.is_be
			? be_OR_stores_
			: be_(
				ctx=>derived_(be_OR_stores_(ctx), val__new),
				config)
	return [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx).set(val)
		},
	]
}
export {
	be_readable_pair_ as be_derived_pair_,
}
