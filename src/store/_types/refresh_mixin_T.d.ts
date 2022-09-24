import type { Readable, refresh_T } from './index'
export interface refresh_mixin_T<I extends unknown = unknown> extends Readable<I> {
	refresh:refresh_T<I>
}
