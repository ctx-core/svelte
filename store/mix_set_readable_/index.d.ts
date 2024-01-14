import type { StoresValues } from '../_types/index.js'
import type { mix_set_readable_I } from '../mix_set_readable/index.js'
import type { Readable } from '../readable/index.js'
import type { Writable_set_T } from '../writable/index.js'
export declare function mix_set_readable_<
	Store extends Readable<unknown>
>(
	store:Store,
	set?:Writable_set_T<StoresValues<Store>>
):mix_set_readable_T<StoresValues<Store>>
export interface mix_set_readable_T<
	Val = unknown
> extends mix_set_readable_I<Val> {
	$:Val
	_:Val
}
export type mix_set_readable__I<
	Val = unknown
> = mix_set_readable_T<Val>
