import { subscribe } from './subscribe.js'
import type { Readable } from './readable.js'
import type { Unsubscriber } from './Unsubscriber.js'
/**
 * Logs (console.debug) changes to a store
 */
export function debug_subscribe<Val extends unknown = unknown>(
	store: Readable<Val>, label: string
):Unsubscriber {
	try {
		return (
			subscribe<Val>(store, value => {
				console.debug(label, value)
			}) as Unsubscriber
		)
	} catch (err) {
		console.error(`Error: ${label}`)
		throw err
	}
}
export { debug_subscribe as subscribe__debug }
