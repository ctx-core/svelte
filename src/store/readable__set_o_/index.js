import { readable } from 'svelte/store'
import { readable_set_o_ } from '../readable_set_o_/index.js'
import { mix_readable_ } from '../readable_/index.js'
export function readable__set_o_(initial, readable_fn = readable) {
	const { store, set } = readable_set_o_(initial, readable_fn)
	const store_ = mix_readable_(store)
	return {
		store: store_,
		set
	}
}
export {
	readable__set_o_ as readable__set_ctx_,
	readable__set_o_ as readable$_set_ctx_,
	readable__set_o_ as _readable_set_ctx$,
}
