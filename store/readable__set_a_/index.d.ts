import type { readable } from '../readable/index.js'
import type { Readable_ } from '../readable_/index.js'
import type { readable_set_a__set_T } from '../readable_set_a_/index.js'
export declare function readable__set_a_<
	Val = unknown
>(
	initial:Val,
	readable_?:typeof readable
):readable__set_a__T<Val>
export declare type readable__set_a__T<
	Val = unknown
> = [
	Readable_<Val>,
	readable_set_a__set_T<Val>
]
export {
	readable__set_a_ as readable$_set_a_,
	readable__set_a_ as readable_set_a1_$,
	readable__set_a_ as _readable_set_a1$,
}
