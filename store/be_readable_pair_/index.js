import { be_ } from '@ctx-core/object'
import { derived_ } from '../derived_'
/** @typedef {import('@ctx-core/object').Be} */
/** @typedef {import('@ctx-core/object').be_config_T} */
/** @typedef {import('@ctx-core/object').be__val__new_T} */
/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('svelte/store').Stores} */
/** @typedef {import('./index.d.ts').be_readable_pair_T} */
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
