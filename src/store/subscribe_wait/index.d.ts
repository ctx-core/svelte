import type { Readable } from 'svelte/store'
import type { ExtractReadableValue } from '../_types'
export declare function subscribe_wait<
	Store extends Readable<unknown>
>(
	store:Store,
	condition_fn:subscribe_wait__condition_fn_T<Store>,
	timeout?:number
):Promise<ExtractReadableValue<Store, unknown>>;
export {
	subscribe_wait as subscribe_wait_for,
	subscribe_wait as wait_for__subscribe
}
export type subscribe_wait__condition_fn_T<
	Store extends Readable<unknown>
> = (val:ExtractReadableValue<Store>)=>any
