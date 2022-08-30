import { isNumber_ } from '@ctx-core/number'
import { promise_timeout } from '@ctx-core/function'
export function subscribe_wait(store, condition_fn, timeout = null) {
	const _subscribe_wait = new Promise((resolve)=>{
		let unsubscribe, unsubscribe_oninit = false
		unsubscribe = store.subscribe((val)=>{
			if (condition_fn(val)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
	return isNumber_(timeout) ? promise_timeout(_subscribe_wait, timeout) : _subscribe_wait
}
export { subscribe_wait as subscribe_wait_for, subscribe_wait as wait_for__subscribe }
