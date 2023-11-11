import type { StoresValues } from '../_types/index.js'
import type { Readable } from '../readable/index.js'
export declare function get<
	Store extends Readable<unknown>
>(store:Store):StoresValues<Store>
