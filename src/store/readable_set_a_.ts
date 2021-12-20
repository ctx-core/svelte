import { Readable, readable } from './readable.js'
import { get } from './get.js'
import type { StartStopNotifier } from './StartStopNotifier.js'
import type { Subscriber } from './Subscriber.js'
export function readable_set_a_<Val extends unknown = unknown>(
	initial:Val, readable_fn = readable
):readable_set_a__T<Val> {
	let set = undefined as readable_set_a__set_T<Val>|undefined
	const store = readable_fn<Val>(initial, (in_set=>{
		set = in_set
	}) as StartStopNotifier<Val>) as Readable<Val>
	get(store)
	return [store, set as readable_set_a__set_T<Val>]
}
export type readable_set_a__set_T<Val extends unknown = unknown> = Subscriber<Val>
export type readable_set_a__T<Val extends unknown = unknown> = [Readable<Val>, readable_set_a__set_T<Val>]
export {
	readable_set_a_ as _readable_set_a1,
}
