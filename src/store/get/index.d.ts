import type { StoresValues } from '../_types'
import type { Readable } from '../readable'
export declare function get<
	Store extends Readable<unknown>
>(store:Store):StoresValues<Store>
