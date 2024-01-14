import type { Readable, Unsubscriber } from 'svelte/store'
import type { ExtractStoresValues, Stores, StoresValues } from '../_types/index.js'
export declare function derived<
	Store extends Stores,
	Val = unknown
>(
	stores:Store,
	in_fn:derived_in_fn_T<Store, Val>,
	initial_value?:Val
):Readable<Val>
export declare type derived_in_fn_T<
	Store extends Stores,
	Val = unknown
> = (
	values:ExtractStoresValues<Store>,
	set:(value:Val)=>void
)=>Val|Unsubscriber|void
export declare type derived_out_fn_T<
	Store extends Stores,
	Val = unknown
> = (
	values:ExtractStoresValues<Store>,
	set?:(value:Val)=>void
)=>Val|Unsubscriber|void
export declare type return_derived_type<
	Store extends Stores,
	Val = unknown
> = (
	stores:Store,
	fn:(values:StoresValues<Store>)=>Val
)=>Readable<Val>
export declare type set_derived_T<
	Store extends Stores,
	Val = unknown
> = (
	stores:Store,
	fn:set_derived__fn_T<Store, Val>,
	initial_value?:Val
)=>Readable<Val>
export type set_derived__fn_T<
	Store extends Stores,
	Val = unknown
> = (
	values:StoresValues<Store>,
	set:(value:Val)=>void
)=>Unsubscriber|void
