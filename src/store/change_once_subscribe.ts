import { noinit_subscribe } from './noinit_subscribe.js'
import type { Readable } from './readable.js'
import type { Subscriber } from './Subscriber.js'
import type { Unsubscriber } from './Unsubscriber.js'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export function change_once_subscribe<Val extends unknown = unknown>(
	store:Readable<Val>,
	fn:Subscriber<Val>
):Unsubscriber {
	const unsubscribe = noinit_subscribe<Val>(store, (value=>{
		const out = fn(value)
		unsubscribe()
		return out
	}) as Subscriber<Val>) as Unsubscriber
	return unsubscribe
}
export { change_once_subscribe as subscribe__change__once }
