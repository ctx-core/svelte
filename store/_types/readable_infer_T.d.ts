import type { Readable } from 'svelte/store'
export declare type readable_infer_T<
	Store extends Readable<unknown> = Readable<unknown>
> =
	Store extends Readable<infer Val>
		? Val
		: never
