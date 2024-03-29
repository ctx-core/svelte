/// <reference types="../readable/index.d.ts" />
import { each, map } from 'ctx-core/array'
import { get } from '../get/index.js'
import { subscribe } from '../subscribe/index.js'
/** @typedef {import('svelte/store').Unsubscriber} */
/**
 * Subscribes to multiple stores. The subscriber fn is called when any of the store_a changes.
 * @param {Readable[]}store_a
 * @param {(val_a:any[])=>void}fn
 * @returns {Unsubscriber}
 */
export function multi_subscribe(
	store_a,
	fn
) {
	const unsubscribe_a =
		map(store_a, (store, i)=>
			subscribe(store, val=>invoke(val, i)))
	return ()=>
		each(
			unsubscribe_a,
			unsubscribe=>unsubscribe())
	function invoke(i_val, i) {
		const all_val_a =
			map(
				store_a,
				(store, j)=>
					j === i
						? i_val
						: get(store))
		fn(all_val_a)
	}
}
export { multi_subscribe as subscribe__multi }
