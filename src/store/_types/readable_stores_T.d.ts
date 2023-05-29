import type { Readable } from 'svelte/store'
export declare type readable_stores_T<
	Val extends unknown = unknown
> = Readable<Val>|Readable<Val>[]
