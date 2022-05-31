import { mix_set_readable_ } from './mix_set_readable_.js'
import type { Readable_ } from './readable_.js'
import type { StartStopNotifier } from './StartStopNotifier.js'
import { writable, Writable } from './writable.js'
export function writable_<Val extends unknown = unknown>(
	value:Val, start?:StartStopNotifier<Val>
):Writable_<Val> {
	const store = writable<Val>(value, start)
	return mix_writable_(store) as Writable_<Val>
}
export function mix_writable_<Val extends unknown = unknown>(
	store:Writable<Val>
):writable_mix_I<Val> {
	return mix_set_readable_(store) as Writable_<Val>
}
export interface writable_mix_I<Val extends unknown = unknown> {
	$:Val
	_:Val
}
export interface Writable_<Val extends unknown = unknown> extends Writable<Val>, Readable_<Val>, writable_mix_I<Val> {
	$:Val
	_:Val
}
export { writable_ as writable$ }
