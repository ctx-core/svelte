import { mix_readable$, Readable$ } from './readable$.js'
import { derived, derived_in_fn_T } from './derived.js'
import type { Stores } from './Stores.js'
export function derived$<Store extends Stores, Val extends unknown = unknown>(
	stores:Store,
	in_fn:derived_in_fn_T<Store, Val>,
	initial_value?:Val
):Readable$<Val> {
	const store = derived<Store, Val>(stores, in_fn, initial_value)
	return mix_readable$(store)
}
