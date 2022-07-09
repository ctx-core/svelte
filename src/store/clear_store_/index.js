import { clear_store } from '../clear_store/index.js'
/**
 * Returns a function that [clear_store](#clear_store).
 */
export function clear_store_(stores, value) {
	return ()=>clear_store(stores, value)
}
export { clear_store_ as _clear_store, clear_store_ as _clear__store, }
