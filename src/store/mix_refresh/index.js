import { assign } from '@ctx-core/object'
import { get } from '../get/index.js'
export function mix_refresh(readable, set) {
	return assign(readable, { refresh })
	function refresh(in_val = get(readable)) {
		if (set) {
			/** @type {any} */
			const $ = get(readable)
			if (typeof $ === 'object') {
				set(assign($, in_val))
			} else {
				set(in_val)
			}
		} else if (readable.update) {
			try {
				readable.update($=>
					$ && typeof $ === 'object'
					? assign($, in_val)
					: in_val)
			} catch (err) {
				console.trace(err)
				throw err
			}
		} else {
			throw 'refresh only works on a Writable or a Readable with a set function argument'
		}
	}
}
