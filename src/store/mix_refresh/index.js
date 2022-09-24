import { assign } from '@ctx-core/object'
import { get } from '../get/index.js'
export function mix_refresh(readable, set) {
	return assign(readable, {
		refresh: function (in_val = readable.$) {
			if (set) {
				const _this = get(this)
				if (typeof _this === 'object') {
					set(assign(_this, in_val))
				} else {
					set(in_val)
				}
			} else if (this.update) {
				try {
					this.update(_this=>{
						if (_this && typeof _this === 'object') {
							return assign(_this, in_val)
						} else {
							return in_val
						}
					})
				} catch (err) {
					console.trace(err)
					throw err
				}
			} else {
				throw 'refresh only works on Readable_ with a set argument or a Writable'
			}
		}.bind(readable),
	})
}
