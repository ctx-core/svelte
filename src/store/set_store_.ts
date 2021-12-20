import { set } from './set.js'
import type { Writable } from './writable.js'
/**
 * Returns a function to set the given store using the value returned by `setter`.
 * This is useful in conjunction with [subscribe](#subscribe).
 */
export function set_store_<Val extends unknown = unknown>(
	store:Writable<Val>,
	setter = (v:Val)=>v
):set_store_T<Val> {
	return (val:Val)=>
		set<Val>(store,
			typeof setter === 'function'
			? setter.call(setter, val)
			: setter)
}
export type set_store_T<Val extends unknown = unknown> = (val:Val)=>void
export {
	set_store_ as _set_store,
	set_store_ as _set__store, 
}
