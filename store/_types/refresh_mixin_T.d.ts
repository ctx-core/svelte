import { Readable } from 'svelte/store'
import { refresh_T } from './refresh_T.js'
export interface refresh_mixin_T<
	I = unknown
> extends Readable<I> {
	refresh:refresh_T<I>
}
