import { readable } from 'svelte/store'
import { readable_fn_ } from '../readable_fn_/index.js'
/** @typedef {import('../_types/index.d.ts').StartStopNotifier} */
/** @typedef {import('../readable').Readable} */
/**
 * @param {unknown}value
 * @param {StartStopNotifier}start
 * @returns {Readable}
 * @private
 */
export function readable_(
	value,
	start
) {
	const store = readable(value, start)
	return mix_readable_(store)
}
export function mix_readable_(store) {
	return readable_fn_(store)
}
export { readable_ as readable$ }
