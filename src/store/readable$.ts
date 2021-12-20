import { get } from './get.js'
import type { Readable } from './readable.js'
import type { StartStopNotifier } from './StartStopNotifier.js'
import { readable } from './readable.js'
export function readable$<Val extends unknown = unknown>(
	value:Val, start?:StartStopNotifier<Val>
):Readable$<Val> {
	const store = readable<Val>(value, start)
	return mix_readable$(store)
}
export function mix_readable$<Val extends unknown = unknown>(
	store:Readable<Val>
):Readable$<Val> {
	Object.defineProperties(store, Object.getOwnPropertyDescriptors({
		get $() {return get(store)},
		get _() {return get(store)},
	}))
	return store as Readable$<Val>
}
export interface Readable$<Val extends unknown = unknown> extends Readable<Val> {
	readonly $:Val
	readonly _:Val
}
