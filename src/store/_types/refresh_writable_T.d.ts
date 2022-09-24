import type { Writable_ } from '../writable_'
import type { refresh_mixin_T } from './refresh_mixin_T'
export interface refresh_writable_T<I> extends Writable_<I>, refresh_mixin_T<I> {}
