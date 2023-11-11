import type { Readable } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
import type { Readable_ } from '../readable_/index.js'
export declare function readable_fn_<
	Store extends Readable<unknown>
>(
	atom:Store,
	rest?:ProxyHandler<Store>
):Readable_<StoresValues<Store>>
