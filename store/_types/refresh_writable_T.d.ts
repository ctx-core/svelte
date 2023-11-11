import type { Writable_ } from '../writable_/index.js'
import type { refresh_mixin_T } from './refresh_mixin_T.js'
export interface refresh_writable_T<I>
	extends Writable_<I>, refresh_mixin_T<I> {
}
