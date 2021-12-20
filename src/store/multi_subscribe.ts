import { each, map } from '@ctx-core/array'
import { get } from './get.js'
import { subscribe } from './subscribe.js'
import type { Unsubscriber } from './Unsubscriber.js'
import type { Readable } from './readable.js'
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a changes.
 */
export function multi_subscribe<Val extends unknown, Store extends Readable<any> = Readable<any>>(
	store_a:Store[],
	fn:((val_a:Val[])=>void)
):Unsubscriber {
	const unsubscribe_a =
		map<Readable<Val>, Unsubscriber>(store_a,
			(store, i)=>subscribe(
				store,
				(val:Val)=>invoke(val, i)
			))
	return ()=>each<Unsubscriber>(unsubscribe_a, unsubscribe=>unsubscribe())
	function invoke(i_val:Val, i:number) {
		const all_val_a =
			map(store_a,
				(store, j:number)=>
					(j === i)
					? i_val
					: get(store)
			) as Val[]
		fn(all_val_a)
	}
}
export { multi_subscribe as subscribe__multi }
