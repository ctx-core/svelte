import type { Readable_ } from '../readable_'
import type { refresh_mixin_T } from './refresh_mixin_T'
export interface refresh_readable_T<I>
	extends Readable_<I>, refresh_mixin_T<I> {
}
