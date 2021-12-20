import type { Readable$ } from './readable$.js'
import type { Readable } from './readable.js'
import type { Readable_subscribe_T } from './Readable_subscribe_T.js'
import { get } from './get.js'
export class readable$_C<Val extends unknown = unknown> implements Readable$<Val> {
	constructor(protected store:Readable<Val>) {}
	readonly subscribe:Readable_subscribe_T<Val> = this.store.subscribe
	public get $():Val {return get(this.store)}
	public get _():Val {return get(this.store)}
}
