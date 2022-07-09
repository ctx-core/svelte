import { mix_set_readable_ } from '../mix_set_readable_/index.js'
import { writable } from 'svelte/store'
export function writable_(value, start) {
	const store = writable(value, start)
	return mix_writable_(store)
}
export function mix_writable_(store) {
	return mix_set_readable_(store)
}
export { writable_ as writable$ }
