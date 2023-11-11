import type { Readable } from 'svelte/store'
export declare type Stores<
	Val extends unknown = unknown
> =
	Readable<Val>
	|[Readable<Val>, ...Array<Readable<Val>>]
