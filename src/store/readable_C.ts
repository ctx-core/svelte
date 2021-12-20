import type { Readable } from './readable.js'
import type { Readable_subscribe_T } from './Readable_subscribe_T.js'
export class readable_C<Val extends unknown = unknown> implements Readable<Val> {
	constructor(protected store:Readable<Val>) {}
	readonly subscribe:Readable_subscribe_T<Val> = this.store.subscribe
}
