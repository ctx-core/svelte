import { Readable_ } from '../readable_/index.js'
import type { refresh_mixin_T } from './refresh_mixin_T.js'
export interface refresh_readable_T<I>
	extends Readable_<I>, refresh_mixin_T<I> {
}
