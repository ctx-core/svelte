import type { readable } from '../readable/index.js'
import type { Readable_ } from '../readable_/index.js'
import type { readable_set_o_T } from '../readable_set_o_/index.js'
export declare function readable__set_o_<
	Val = unknown
>(
	initial:Val,
	readable_fn?:typeof readable
):readable__set_o__T<Val>
export interface readable__set_o__T<
	Val = unknown
> extends readable_set_o_T<Val> {
	store:Readable_<Val>
}
export {
	readable__set_o_ as readable__set_ctx_,
	readable__set_o_ as readable$_set_ctx_,
	readable__set_o_ as _readable_set_ctx$,
	readable__set_o__T as readable__set_ctx__T,
}
