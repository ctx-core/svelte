import type { Updater } from 'svelte/store'
export declare type Writable_set_T<
	Val = unknown
> = (this:void, value:Val)=>void
export declare type Writable_update_T<
	Val = unknown
> = (this:void, update:Updater<Val>)=>void
