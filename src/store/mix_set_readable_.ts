import type { mix_set_readable_I } from './mix_set_readable.js'
import { mix_set_readable } from './mix_set_readable.js'
import type { Readable } from './readable.js'
import type { Writable_set_T } from './writable.js'
import { writable_fn_ } from './writable_fn_'
export function mix_set_readable_<Val extends unknown = unknown>(
	store:Readable<Val>, set?:Writable_set_T<Val>
):mix_set_readable__I<Val> {
	if (set) {
		mix_set_readable<Val>(store, set)
	}
	const mix_set_readable_store = store as mix_set_readable_I<Val>
	if (!mix_set_readable_store.set) {
		throw `There must be a set function argument or store must have a set method`
	}
	return writable_fn_(mix_set_readable_store)
}
export interface mix_set_readable__I<Val extends unknown = unknown> extends mix_set_readable_I<Val> {
	$:Val
	_:Val
}
