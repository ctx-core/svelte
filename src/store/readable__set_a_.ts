import { readable } from './readable.js'
import { readable_set_a_, readable_set_a__set_T } from './readable_set_a_.js'
import { mix_readable_, Readable_ } from './readable_.js'
export function readable__set_a_<Val extends unknown = unknown>(
	initial:Val, readable_ = readable
):readable__set_a__T<Val> {
	const [store, set] = readable_set_a_(initial, readable_)
	const store_ = mix_readable_(store)
	return [store_, set]
}
export type readable__set_a__T<Val extends unknown = unknown> = [Readable_<Val>, readable_set_a__set_T<Val>]
export {
	readable__set_a_ as readable$_set_a_,
	readable__set_a_ as readable_set_a1_$,
	readable__set_a_ as _readable_set_a1$,
}
