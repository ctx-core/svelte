import type { Subscriber, Unsubscriber } from 'svelte/store'
import type { Invalidator } from './Invalidator.js'
export declare type Readable_subscribe_T<
	T = unknown
> = (
	this:void,
	run:Subscriber<T>,
	invalidate?:Invalidator<T>
)=>Unsubscriber
