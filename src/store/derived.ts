import { derived as in_derived } from 'svelte/store'
import { tup, isArray } from '@ctx-core/array'
import type { Readable } from './readable.js'
import type { Stores } from './Stores.js'
import type { ExtractStoresValues } from './ExtractStoresValues.js'
import type { Unsubscriber } from './Unsubscriber.js'
import type { StoresValues } from './StoresValues.js'
export function derived<Store extends Stores, Val extends unknown = unknown>(
	stores:Store,
	in_fn:derived_in_fn_T<Store, Val>,
	initial_value?:Val
):Readable<Val> {
	const fn = in_fn as derived_out_fn_T<Store, Val>
	return (
		in_fn.length === 1
		? (in_derived as return_derived_type<Store, Val>)(
			stores,
			((values:StoresValues<Store>)=>{
				return fn(
					(isArray(values) ? tup(...values) : values) as ExtractStoresValues<Store>
				) as Val
			}) as derived_return_in_fn_T<Store, Val>
		)
		: (in_derived as set_derived_T<Store, Val>)(
			stores,
			((values:StoresValues<Store>, set:(value:Val)=>void)=>{
				return fn(
					(isArray(values) ? tup(...values) : values) as ExtractStoresValues<Store>, set
				) as Unsubscriber|void
			}) as derived_set_in_fn_T<Store, Val>,
			initial_value
		)
	)
}
export type derived_in_fn_T<Store extends Stores, Val extends unknown = unknown> = (
	values:ExtractStoresValues<Store>, set:(value:Val)=>void
)=>Val|Unsubscriber|void
export type derived_out_fn_T<Store extends Stores, Val extends unknown = unknown> = (
	values:ExtractStoresValues<Store>, set?:(value:Val)=>void
)=>Val|Unsubscriber|void
export type derived_return_in_fn_T<Store extends Stores, Val extends unknown = unknown> = (
	values:ExtractStoresValues<Store>
)=>Val
export type derived_set_in_fn_T<Store extends Stores, Val extends unknown = unknown> =
	(values:ExtractStoresValues<Store>, set:(value:Val)=>void)=>Unsubscriber|void
export type return_derived_type<Store extends Stores, Val extends unknown = unknown> =
	(
		stores:Store,
		fn:(values:StoresValues<Store>)=>Val
	)=>Readable<Val>
export type set_derived_T<Store extends Stores, Val extends unknown = unknown> =
	(
		stores:Store,
		fn:(
			values:StoresValues<Store>,
			set:(value:Val)=>void
		)=>Unsubscriber|void,
		initial_value?:Val
	)=>Readable<Val>
