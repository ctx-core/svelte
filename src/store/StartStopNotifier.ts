import type { Subscriber } from './Subscriber.js'
import type { Unsubscriber } from './Unsubscriber.js'
export type StartStopNotifier<Val extends unknown = unknown> = (set:Subscriber<Val>)=>Unsubscriber|void
