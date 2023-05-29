import type { Readable, Subscriber, Writable } from 'svelte/store'
import type { refresh_mixin_T } from '../_types'
export declare function mix_refresh<
	store_T extends unknown = unknown
>(
	readable:Readable<store_T>,
	set?:
		typeof readable extends Writable<store_T>
		? undefined
		: Subscriber<store_T>
):refresh_mixin_T<store_T>
