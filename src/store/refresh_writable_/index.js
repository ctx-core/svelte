import { writable_ } from '../writable_/index.js'
import { mixin_refresh } from '../mixin_refresh/index.js'
export function refresh_writable_(init) {
	return mixin_refresh(writable_(init))
}
