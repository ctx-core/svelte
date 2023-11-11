import type { Readable, Subscriber, Unsubscriber } from 'svelte/store'
import type { StoresValues } from '../_types/index.js'
/**
 * Calls the given fn the next time the value of the store changes, then unsubscribes.
 */
export declare function change_once_subscribe<
	Store extends Readable<unknown>
>(
	store:Store,
	fn:Subscriber<StoresValues<Store>>
):Unsubscriber
export { change_once_subscribe as subscribe__change__once }
