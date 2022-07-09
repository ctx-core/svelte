import { assign } from '@ctx-core/object'
import { get } from '../get/index.js'
export function mix_set_readable(store, set) {
	return assign(store, {
		set,
		update(updater) {
			set(updater(get(store)))
		}
	})
}
