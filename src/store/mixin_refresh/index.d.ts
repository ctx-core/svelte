import type { Subscriber } from 'svelte/store'
import type { refresh_mixin_T } from '../_types'
import type { Readable_ } from '../readable_'
import type { Writable_ } from '../writable_'
export declare function mixin_refresh<store_T extends unknown = unknown>(
	readable:Readable_<store_T>,
	set?:typeof readable extends Writable_<store_T> ? undefined : Subscriber<store_T>
):refresh_mixin_T<store_T>
