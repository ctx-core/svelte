import type { readable } from '../readable'
import type { Readable_ } from '../readable_'
import type { readable_set_ctx_T } from '../readable_set_ctx_'
export declare function readable__set_ctx_<Val extends unknown = unknown>(initial:Val, readable_fn?:typeof readable):readable__set_ctx__T<Val>;
export interface readable__set_ctx__T<Val extends unknown = unknown> extends readable_set_ctx_T<Val> {
	store:Readable_<Val>
}
export { readable__set_ctx_ as readable$_set_ctx_, readable__set_ctx_ as _readable_set_ctx$, }
