import type { Readable } from 'svelte/store'
export declare type ExtractReadableValue<
	Store extends Readable<unknown>,
	Else = unknown
> = Store extends (Readable<infer Val>)
	? Val
	: Extract<Store, Readable<unknown>> extends Readable<infer O>
		? O
		: Else
