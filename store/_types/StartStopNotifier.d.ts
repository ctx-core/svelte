import type { Subscriber, Unsubscriber } from 'svelte/store'
export declare type StartStopNotifier<
	Val = unknown
> = (set:Subscriber<Val>)=>Unsubscriber|void
