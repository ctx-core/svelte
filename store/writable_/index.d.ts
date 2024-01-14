import type { Writable } from 'svelte/store'
import type { StartStopNotifier } from '../_types/index.js'
import { mix_set_readable_T } from '../mix_set_readable_/index.js'
import type { Readable_ } from '../readable_/index.js'
export declare function writable_<
	Val = unknown
>(
	value:Val,
	start?:StartStopNotifier<Val>
):Writable_<Val>
export declare function mix_writable_<
	Val = unknown
>(store:Writable<Val>):writable_mix_I<Val>
export interface writable_mix_I<
	Val = unknown
> {
	$:Val
	_:Val
}
export interface Writable_<
	Val = unknown
> extends Writable<Val>,
	Readable_<Val>,
	writable_mix_I<Val>,
	mix_set_readable_T<Val> {
	$:Val
	_:Val
}
export { writable_ as writable$ }
