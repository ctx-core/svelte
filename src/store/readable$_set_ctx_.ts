import { readable } from './readable.js'
import type { readable_set_ctx_T } from './readable_set_ctx_.js'
import { readable_set_ctx_ } from './readable_set_ctx_.js'
import { mix_readable$, Readable$ } from './readable$.js'
export function readable$_set_ctx_<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):readable$_set_ctx__T<Val> {
	const { store, set } = readable_set_ctx_(initial, readable_fn)
	const store$ = mix_readable$(store)
	return { store: store$, set }
}
export interface readable$_set_ctx__T<Val extends unknown = unknown> extends readable_set_ctx_T<Val> {
	store:Readable$<Val>
}
export {
	readable$_set_ctx_ as _readable_set_ctx$,
}
