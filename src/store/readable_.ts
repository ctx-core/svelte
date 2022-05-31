import type { Readable } from './readable.js'
import { readable } from './readable.js'
import { readable_fn_ } from './readable_fn_'
import type { StartStopNotifier } from './StartStopNotifier.js'
export function readable_<Val extends unknown = unknown>(
	value:Val, start?:StartStopNotifier<Val>
):Readable_<Val> {
	const store = readable<Val>(value, start)
	return mix_readable_(store)
}
export function mix_readable_<Val extends unknown = unknown>(
	store:Readable<Val>
):Readable_<Val> {
	return readable_fn_(store)
}
export interface Readable_<Val extends unknown = unknown> extends Readable<Val> {
	():Val
	(_:Val):void
	readonly $:Val
	readonly _:Val
}
export {
	readable_ as readable$,
	Readable_ as Readable$
}
