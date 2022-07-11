import { readable } from 'svelte/store'
import { readable_set_ctx_ } from '../readable_set_ctx_/index.js'
import { mix_readable_ } from '../readable_/index.js'
export function readable__set_ctx_(initial, readable_fn = readable) {
	const { store, set } = readable_set_ctx_(initial, readable_fn)
	const store_ = mix_readable_(store)
	return {
		store: store_,
		set
	}
}
export { readable__set_ctx_ as readable$_set_ctx_, readable__set_ctx_ as _readable_set_ctx$, }
