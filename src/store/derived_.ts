import { derived, derived_in_fn_T } from './derived.js'
import { mix_readable_, Readable_ } from './readable_.js'
import type { Stores } from './Stores.js'
export function derived_<Store extends Stores, Val extends unknown = unknown>(
	stores:Store,
	in_fn:derived_in_fn_T<Store, Val>,
	initial_value?:Val
):Readable_<Val> {
	const store = derived<Store, Val>(stores, in_fn, initial_value)
	return mix_readable_(store)
}
export { derived_ as derived$ }
