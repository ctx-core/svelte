import { be_ } from '@ctx-core/object'
import { writable_ } from '../writable_/index.js'
/** @typedef {import('@ctx-core/object').Be} */
/** @typedef {import('@ctx-core/object').be_config_T} */
/** @typedef {import('@ctx-core/object').be__val__new_T} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('svelte/store').Writable} */
/** @typedef {import('./index.d.ts').be_writable_triple_T} */
/**
 * @param {Be<Writable>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_writable_triple_T}
 * @private
 */
export function be_writable_triple_(be_OR_val__new, config) {
	/** @type {Be<Writable>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(
				ctx=>writable_(be_OR_val__new(ctx)),
				config)
	return [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx).set(val)
		},
	]
}
