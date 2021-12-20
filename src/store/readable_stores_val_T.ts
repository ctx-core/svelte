import type { readable_stores_T } from './readable_stores_T.js'
import type { Readable } from './readable.js'
export type readable_stores_val_T<Store extends readable_stores_T<unknown>> =
	Store extends Readable<infer N0_Val>[]
	? N0_Val
	: Store extends Readable<infer N1_Val>
		? N1_Val
		: never
