import { promise_timeout } from '@ctx-core/function'
import type { ExtractReadableValue } from './ExtractReadableValue.js'
import { subscribe_wait } from './subscribe_wait.js'
import type { Readable } from './readable.js'
export function subscribe_wait_timeout<Store extends Readable<unknown>>(
	store:Store,
	condition_fn:(val:ExtractReadableValue<Store>)=>any =
		(val:ExtractReadableValue<Store>)=>!!val,
	timeout:number
) {
	return promise_timeout<ExtractReadableValue<Store>>(subscribe_wait(store, condition_fn), timeout)
}
export {
	subscribe_wait_timeout as subscribe_wait_for_timeout
}
