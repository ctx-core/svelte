import { readable } from 'svelte/store'
import { readable_fn_ } from '../readable_fn_/index.js'
export function readable_(value, start) {
	const store = readable(value, start)
	return mix_readable_(store)
}
export function mix_readable_(store) {
	return readable_fn_(store)
}
export { readable_ as readable$ }
