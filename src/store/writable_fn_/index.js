import { get } from 'svelte/store'
/** @typedef {import('svelte/store').Writable}Writable */
/** @typedef {import('../writable_').Writable_}Writable_ */
/**
 * @param {Writable}writable
 * @returns {Writable_}
 * @private
 */
export function writable_fn_(writable) {
	function fn(_) {
		return (
			arguments.length
			? writable.set(_)
			: get(writable))
	}
	return new Proxy(fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return get(writable)
			}
			return Reflect.get(writable, prop, writable)
		},
		set(target, prop, val, receiver) {
			if (prop === '_' || prop === '$') {
				writable.set(val)
				return true
			}
			return Reflect.set(writable, prop, val, writable)
		}
	})
}
