import type { readable } from '../readable'
import type { Readable_ } from '../readable_'
import type { readable_set_a__set_T } from '../readable_set_a_'
export declare function readable__set_a_<
	Val extends unknown = unknown
>(
	initial:Val,
	readable_?:typeof readable
):readable__set_a__T<Val>
export declare type readable__set_a__T<
	Val extends unknown = unknown
> = [
	Readable_<Val>,
	readable_set_a__set_T<Val>
]
export {
	readable__set_a_ as readable$_set_a_,
	readable__set_a_ as readable_set_a1_$,
	readable__set_a_ as _readable_set_a1$,
}
