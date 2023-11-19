import { be_ } from '@ctx-core/object'
/** @typedef {import('svelte/store').Readable} */
/** @typedef {import('./index.d.ts').be_readable_pair_T} */
/**
 * @param {be__val__new_T<Readable>}readable__new
 * @returns {be_readable_pair_T}
 * @private
 */
export function be_readable_pair_(readable__new) {
	let oninit
	const be_readable_pair = [
		be_(ctx=>{
			let readable = readable__new(ctx)
			oninit?.(ctx, readable)
			return readable
		}),
		ctx=>be_readable_pair[0](ctx)(),
		(ctx, val)=>{
			be_readable_pair[0](ctx).set(val)
		},
	]
	be_readable_pair.config = params=>(be_readable_pair[0].config(params), be_readable_pair)
	be_readable_pair.oninit = _oninit=>(oninit = _oninit, be_readable_pair)
	return be_readable_pair
}
export {
	be_readable_pair_ as be_derived_pair_,
}
