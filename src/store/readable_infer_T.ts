import type { Readable } from './readable.js'
export type readable_infer_T<Store extends Readable<unknown> = Readable<unknown>> =
	Store extends Readable<infer Val>
		? Val
		: never
