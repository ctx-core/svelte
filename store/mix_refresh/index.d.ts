import type { Readable, Subscriber, Writable } from 'svelte/store'
import type { refresh_mixin_T } from '../_types/index.js'
export declare function mix_refresh<
	Val = unknown
>(
	readable:Readable<Val>,
	set?:
		typeof readable extends Writable<Val>
			? undefined
			: Subscriber<Val>
):refresh_mixin_T<Val>
