import { be_ } from '@ctx-core/object'
import { writable_ } from '../writable_/index.js'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('svelte/store').Writable}Writable */
/** @typedef {import('./index.d.ts').be_writable_triple_T}be_writable_triple_T */
/**
 * @param {string|null|undefined|((ctx:Ctx)=>Writable)|be__params_T}[id_OR_writable__new_OR_be__params]
 * @param {((ctx:Ctx)=>Writable)|be__params_T}[writable__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {be_writable_triple_T}
 * @private
 */
export function be_writable_triple_(
	id_OR_writable__new_OR_be__params,
	writable__new_OR_be__params,
	be__params
) {
	/** @type {string} */
	let id
	/** @type {(ctx:Ctx)=>Writable} */
	let writable__new
	if (typeof id_OR_writable__new_OR_be__params === 'function') {
		writable__new_OR_be__params = id_OR_writable__new_OR_be__params
	} else if (typeof id_OR_writable__new_OR_be__params === 'object') {
		be__params = id_OR_writable__new_OR_be__params
	} else {
		id = id_OR_writable__new_OR_be__params
	}
	if (typeof writable__new_OR_be__params === 'function') {
		writable__new = writable__new_OR_be__params
	} else if (!be__params) {
		be__params = writable__new_OR_be__params
	}
	if (!writable__new) {
		writable__new =
			()=>
				writable_()
	}
	const val__ =
		id
		? be_(id, writable__new, be__params)
		: be_(writable__new, be__params)
	function val_(ctx) {
		return val__(ctx).$
	}
	function val__set(ctx, val) {
		val__(ctx).$ = val
	}
	return [
		val__,
		val_,
		val__set
	]
}
