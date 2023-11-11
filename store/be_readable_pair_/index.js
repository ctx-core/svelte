import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('svelte/store').Readable}Readable */
/** @typedef {import('./index.d.ts').be_readable_pair_T}be_readable_pair_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>Readable)}id_OR_derived__new
 * @param {((ctx:Ctx)=>Readable)|be__params_T}[derived__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_readable_pair_T}
 * @private
 */
export function be_readable_pair_(
	id_OR_derived__new,
	derived__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx)=>Readable} */
	let derived__new
	if (typeof id_OR_derived__new === 'function') {
		derived__new = id_OR_derived__new
		be__params = derived__new_OR_be__params
	} else {
		id = id_OR_derived__new
		derived__new = derived__new_OR_be__params
	}
	if (!derived__new) throw new Error('be_readable_pair_|derived__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val__ =
		id
			? _be_(id, derived__new, be__params)
			: _be_(derived__new, be__params)
	function val_(ctx) {
		return val__(ctx).$
	}
	return [
		val__,
		val_,
	]
}
export {
	be_readable_pair_ as be_derived_pair_,
}
