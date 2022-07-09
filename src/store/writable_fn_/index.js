import { get } from 'svelte/store'
export function writable_fn_(atom) {
	function fn(_) {
		return arguments.length ? atom.set(_) : get(atom)
	}
	return new Proxy(fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return get(atom)
			}
			return Reflect.get(atom, prop, atom)
		},
		set(target, prop, val, receiver) {
			if (prop === '_' || prop === '$') {
				atom.set(val)
				return true
			}
			return Reflect.set(atom, prop, val, atom)
		}
	})
}
