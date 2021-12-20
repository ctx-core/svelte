import type { Writable, Writable_set_T, Writable_update_T } from './writable.js'
import type { Readable_subscribe_T } from './Readable_subscribe_T.js'
export class writable_C<Val extends unknown = unknown> implements Writable<Val> {
	constructor(protected store: Writable<Val>) {}
	readonly subscribe:Readable_subscribe_T<Val> = this.store.subscribe
	readonly set:Writable_set_T<Val> = this.store.set
	readonly update:Writable_update_T<Val> = this.store.update
}
