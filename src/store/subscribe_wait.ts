import type { Readable } from 'svelte/store'
import type { ExtractReadableValue } from './ExtractReadableValue.js'
export function subscribe_wait<Store extends Readable<unknown>>(
	store:Store,
	condition_fn:(val:ExtractReadableValue<Store>)=>any =
		(val:ExtractReadableValue<Store>)=>!!val,
) {
	return new Promise<ExtractReadableValue<Store>>(resolve=>{
		let unsubscribe:()=>void, unsubscribe_oninit = false
		unsubscribe = store.subscribe(val=>{
			if (condition_fn(val as ExtractReadableValue<Store>)) {
				if (unsubscribe) unsubscribe()
				else unsubscribe_oninit = true
				resolve(val as ExtractReadableValue<Store>)
			}
		})
		if (unsubscribe_oninit) unsubscribe()
	})
}
export {
	subscribe_wait as subscribe_wait_for,
	subscribe_wait as wait_for__subscribe
}
