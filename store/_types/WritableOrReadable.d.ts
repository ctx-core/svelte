import type { Readable, Writable } from 'svelte/store'
export declare type WritableOrReadable<
	Val extends unknown = unknown,
	Store extends Readable<Val> = Readable<Val>
> =
	Store extends Writable<Val>
		? Store
		: Store extends Readable<Val>
			? Store
			: never
