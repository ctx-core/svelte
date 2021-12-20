import { each } from '@ctx-core/array'
import { wrap_a_ } from '@ctx-core/function'
import type { Writable } from './writable.js'
/**
 * Sets each store with val
 */
export function clear_store<Val extends unknown = unknown>(
	stores:Writable<Val>|Writable<Val>[], val:Val
):void {
	const store_a = wrap_a_<Writable<Val>>(stores)
	each(store_a, (store:Writable<Val>)=>store.set(val))
}
export { clear_store as clear__store }
