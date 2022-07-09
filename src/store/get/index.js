import { get as in_get } from 'svelte/store'
export function get(store) {
	return in_get(store)
}
