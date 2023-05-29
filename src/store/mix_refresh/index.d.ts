import type { Readable, Subscriber, Writable } from 'svelte/store'
import type { refresh_mixin_T } from '../_types'
export declare function mix_refresh<
	Val extends unknown = unknown
>(
	readable:Readable<Val>,
	set?:
		typeof readable extends Writable<Val>
		? undefined
		: Subscriber<Val>
):refresh_mixin_T<Val>
