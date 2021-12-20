import { readable } from './readable.js'
import { readable_set_a_, readable_set_a__set_T } from './readable_set_a_.js'
import { mix_readable$, Readable$ } from './readable$.js'
export function readable$_set_a_<Val extends unknown = unknown>(
	initial:Val, readable_ = readable
):readable$_set_a__T<Val> {
	const [store, set] = readable_set_a_(initial, readable_)
	const store$ = mix_readable$(store)
	return [store$, set]
}
export type readable$_set_a__T<Val extends unknown = unknown> = [Readable$<Val>, readable_set_a__set_T<Val>]
export {
	readable$_set_a_ as readable_set_a1_$,
	readable$_set_a_ as _readable_set_a1$,
}
