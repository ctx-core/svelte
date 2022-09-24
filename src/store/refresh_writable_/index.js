import { writable_ } from '../writable_/index.js'
import { mix_refresh } from '../mix_refresh/index.js'
export function refresh_writable_(init) {
	return mix_refresh(writable_(init))
}
