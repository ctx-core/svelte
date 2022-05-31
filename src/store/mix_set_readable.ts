import { assign } from '@ctx-core/object'
import type { Readable, Updater } from 'svelte/store'
import { get } from './get.js'
import type { Writable_set_T, Writable_update_T } from './writable.js'
export function mix_set_readable<Val extends unknown = unknown>(
	store:Readable<Val>, set:Writable_set_T<Val>
):mix_set_readable_I<Val> {
	return assign(store as mix_set_readable_I<Val>, {
		set,
		update(updater:Updater<Val>) {
			set(updater(get(store)))
		}
	})
}
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
	set:Writable_set_T<Val>
	update:Writable_update_T<Val>
}
