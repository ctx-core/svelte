import type { ExtractReadableValue } from '../_types'
import type { Readable } from '../readable'
import type { subscribe_wait__condition_fn_T } from '../subscribe_wait'
export declare function subscribe_wait_timeout<
	Store extends Readable<unknown>
>(
	store:Store,
	condition_fn:
		subscribe_wait__condition_fn_T<Store>
		|undefined,
	timeout:number
):Promise<ExtractReadableValue<Store, unknown>>;
export {
	subscribe_wait_timeout as subscribe_wait_for_timeout
}
