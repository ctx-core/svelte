export function readable_fn_(atom, rest = {}) {
	function fn() {
		return atom.get()
	}
	return new Proxy(fn, {
		get(target, prop, receiver) {
			if (prop === '_' || prop === '$') {
				return atom.get()
			}
			return Reflect.get(atom, prop, atom)
		},
		...rest
	})
}
