import type { Readable } from 'svelte/store'
import type { Writable_set_T, Writable_update_T } from '../writable/index.js'
export declare function mix_set_readable<Val extends unknown = unknown>(store:Readable<Val>, set:Writable_set_T<Val>):mix_set_readable_I<Val>
export interface mix_set_readable_I<Val extends unknown = unknown> extends Readable<Val> {
	set:Writable_set_T<Val>
	update:Writable_update_T<Val>
}
