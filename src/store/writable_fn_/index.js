export function writable_fn_(atom) {
	function fn(_) {
		return arguments.length ? atom.set(_) : atom.get()
	}
	return new Proxy(fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return atom.get()
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
