import type { Subscriber, Unsubscriber } from 'svelte/store'
import type { Invalidator } from './Invalidator.js'
export type Readable_subscribe_T<T extends unknown = unknown> = (this:void, run:Subscriber<T>, invalidate?:Invalidator<T>)=>Unsubscriber
