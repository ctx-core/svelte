import { promise_timeout } from '@ctx-core/function'
import { subscribe_wait } from '../subscribe_wait/index.js'
export function subscribe_wait_timeout(store, condition_fn, timeout) {
	return promise_timeout(subscribe_wait(store, condition_fn), timeout)
}
export { subscribe_wait_timeout as subscribe_wait_for_timeout }
