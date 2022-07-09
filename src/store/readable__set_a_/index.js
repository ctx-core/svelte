import { readable } from 'svelte/store'
import { readable_set_a_ } from '../readable_set_a_/index.js'
import { mix_readable_ } from '../readable_/index.js'
export function readable__set_a_(initial, readable_ = readable) {
	const [store, set] = readable_set_a_(initial, readable_)
	const store_ = mix_readable_(store)
	return [
		store_,
		set
	]
}
export {
	readable__set_a_ as readable$_set_a_,
	readable__set_a_ as readable_set_a1_$,
	readable__set_a_ as _readable_set_a1$,
}
