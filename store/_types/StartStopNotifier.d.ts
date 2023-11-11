import type { Subscriber, Unsubscriber } from 'svelte/store'
export declare type StartStopNotifier<
	Val extends unknown = unknown
> = (set:Subscriber<Val>)=>Unsubscriber|void
