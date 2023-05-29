import type { Readable } from 'svelte/store'
import type { StoresValues } from '../_types'
import type { Readable_ } from '../readable_'
export declare function readable_fn_<
	Store extends Readable<unknown>
>(
	atom:Store,
	rest?:ProxyHandler<Store>
):Readable_<StoresValues<Store>>
