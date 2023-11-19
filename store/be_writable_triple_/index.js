import { be_ } from '@ctx-core/object'
import { writable_ } from '../writable_/index.js'
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('svelte/store').Writable} */
/** @typedef {import('./index.d.ts').be_writable_triple_T} */
/**
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_writable_triple_T}
 * @private
 */
export function be_writable_triple_(val__new) {
	let oninit
	const be_writable_triple = [
		be_(ctx=>{
			let atom = writable_(val__new(ctx))
			oninit?.(atom)
			return atom
		}),
		ctx=>be_writable_triple[0](ctx)(),
		(ctx, val)=>{
			be_writable_triple[0](ctx).set(val)
		},
	]
	be_writable_triple.config = config__fn=>(config__fn(be_writable_triple[0]), be_writable_triple)
	be_writable_triple.oninit__def = _oninit=>(oninit = _oninit, be_writable_triple)
	return be_writable_triple
}
