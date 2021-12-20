import type { Writable$ } from './writable$.js'
import type { Writable, Writable_set_T, Writable_update_T } from './writable.js'
import { readable$_C } from './readable$_C.js'
import { get } from './get.js'
export class writable$_C<Val extends unknown = unknown> extends readable$_C<Val> implements Writable$<Val> {
	constructor(protected store:Writable<Val>) {
		super(store)
	}
	readonly set:Writable_set_T<Val> = this.store.set
	readonly update:Writable_update_T<Val> = this.store.update
	public get $():Val {return get(this.store)}
	public set $(val) {this.store.set(val)}
	public get _():Val {return get(this.store)}
	public set _(val) {this.store.set(val)}
}
