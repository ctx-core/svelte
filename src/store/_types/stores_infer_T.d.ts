import type { Stores } from './Stores'
export declare type stores_infer_T<Store extends Stores<unknown>> = Store extends (infer Val) ? Val : never
