import type { Readable } from './readable.js'
import { get } from './get.js'
import type { mix_set_readable_I } from './mix_set_readable.js'
import { mix_set_readable } from './mix_set_readable.js'
import type { Writable_set_T } from './writable.js'
import type { Writable_update_T } from './writable.js'
import type { Readable_subscribe_T } from './Readable_subscribe_T.js'
export function mix_set_readable$<Val extends unknown = unknown>(
	store:Readable<Val>, set?:Writable_set_T<Val>
):mix_set_readable$_I<Val> {
	if (set) {
		mix_set_readable<Val>(store, set)
	}
	const mix_set_readable_store = store as mix_set_readable_I<Val>
	if (!mix_set_readable_store.set) {
		throw `There must be a set function argument or store must have a set method`
	}
	Object.defineProperties(mix_set_readable_store, Object.getOwnPropertyDescriptors({
		get $() {
			return get(store)
		},
		set $(val) {
			mix_set_readable_store.set(val)
		},
		get _() {
			return get(store)
		},
		set _(val) {
			mix_set_readable_store.set(val)
		},
	}))
	return mix_set_readable_store as mix_set_readable$_I<Val>
}
export interface mix_set_readable$_I<Val extends unknown = unknown> extends mix_set_readable_I<Val> {
	$:Val
	_:Val
}
export class mix_set_readable$_C<Val extends unknown = unknown> implements mix_set_readable$_I<Val> {
	constructor(protected store:mix_set_readable$_I<Val>) {}
	readonly subscribe:Readable_subscribe_T<Val> = this.store.subscribe
	readonly set:Writable_set_T<Val> = this.store.set
	readonly update:Writable_update_T<Val> = this.store.update
	$:Val = this.store.$
	_:Val = this.store.$
}
