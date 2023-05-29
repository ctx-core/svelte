import type { StoresValues } from '../_types'
import type { mix_set_readable_I } from '../mix_set_readable'
import type { Readable } from '../readable'
import type { Writable_set_T } from '../writable'
export declare function mix_set_readable_<
	Store extends Readable<unknown>
>(
	store:Store,
	set?:Writable_set_T<StoresValues<Store>>
):mix_set_readable_T<StoresValues<Store>>
export interface mix_set_readable_T<
	Val extends unknown = unknown
> extends mix_set_readable_I<Val> {
	$:Val
	_:Val
}
export type mix_set_readable__I<
	Val extends unknown = unknown
> = mix_set_readable_T<Val>
