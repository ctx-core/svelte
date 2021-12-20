import type { Stores } from './Stores.js'
export type stores_infer_T<Store extends Stores<unknown>> =
	Store extends (infer Val) ? Val : never
