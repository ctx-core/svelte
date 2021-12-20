import type { StartStopNotifier } from './StartStopNotifier.js'
import { writable, Writable } from './writable.js'
import type { Readable$ } from './readable$.js'
import { mix_set_readable$ } from './mix_set_readable$.js'
export function writable$<Val extends unknown = unknown>(
	value:Val, start?:StartStopNotifier<Val>
):Writable$<Val> {
	const store = writable<Val>(value, start)
	return mix_writable$(store) as Writable$<Val>
}
export function mix_writable$<Val extends unknown = unknown>(
	store:Writable<Val>
):writable_mix_I<Val> {
	return mix_set_readable$(store) as Writable$<Val>
}
export interface writable_mix_I<Val extends unknown = unknown> {
	$:Val
	_:Val
}
export interface Writable$<Val extends unknown = unknown> extends Writable<Val>, Readable$<Val>, writable_mix_I<Val> {
	$:Val
	_:Val
}
