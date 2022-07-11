import { get } from 'svelte/store'
/**
 * @param {import('svelte/store').Readable}atom
 * @param {ProxyHandler<import('svelte/store').Readable<any>>}rest
 * @returns {(function(): *)|any}
 * @private
 */
export function readable_fn_(atom, rest = {}) {
	function fn() {
		return get(atom)
	}
	return new Proxy(fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return get(atom)
			}
			return Reflect.get(atom, prop, atom)
		},
		set(target, prop, val, receiver) {
			return Reflect.set(atom, prop, val, atom)
		},
		...rest
	})
}
