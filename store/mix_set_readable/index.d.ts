import type { Readable } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
import type { Writable_set_T, Writable_update_T } from '../writable/index.js'
export declare function mix_set_readable<
	Store extends Readable<unknown>
>(
	store:Store,
	set:Writable_set_T<StoresValues<Store>>
):mix_set_readable_I<StoresValues<Store>>
export interface mix_set_readable_I<
	Val extends unknown = unknown
> extends Readable<Val> {
	set:Writable_set_T<Val>
	update:Writable_update_T<Val>
}
