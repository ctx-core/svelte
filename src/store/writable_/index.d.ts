import type { Writable } from 'svelte/store'
import type { StartStopNotifier } from '../_types'
import type { Readable_ } from '../readable_'
export declare function writable_<Val extends unknown = unknown>(value:Val, start?:StartStopNotifier<Val>):Writable_<Val>;
export declare function mix_writable_<Val extends unknown = unknown>(store:Writable<Val>):writable_mix_I<Val>;
export interface writable_mix_I<Val extends unknown = unknown> {
	$:Val;
	_:Val;
}
export interface Writable_<Val extends unknown = unknown> extends Writable<Val>, Readable_<Val>, writable_mix_I<Val> {
	$:Val;
	_:Val;
}
export { writable_ as writable$ }
