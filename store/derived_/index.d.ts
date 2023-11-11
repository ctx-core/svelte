import type { Stores } from '../_types/index.js'
import type { derived_in_fn_T } from '../derived/index.js'
import type { Readable_ } from '../readable_/index.js'
export declare function derived_<
	Store extends Stores,
	Val extends unknown = unknown
>(
	stores:Store,
	in_fn:derived_in_fn_T<Store, Val>,
	initial_value?:Val):Readable_<Val
>
export { derived_ as derived$ }
