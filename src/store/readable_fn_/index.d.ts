import type { Readable } from 'svelte/store'
import type { Readable_ } from '../readable_'
export declare function readable_fn_<
	Val
>(
	atom:Readable<Val>,
	rest?:ProxyHandler<Readable<Val>>
):Readable_<Val>
