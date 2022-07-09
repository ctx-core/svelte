import { Readable, Subscriber, Unsubscriber, Updater, Writable } from 'svelte/store'
export { Readable, Subscriber, Unsubscriber, Updater, Writable }
export declare type ExtractReadableValue<Store extends Readable<unknown>, Else extends unknown = unknown> = Store extends (Readable<infer Val>) ? Val : Extract<Store, Readable<unknown>> extends Readable<infer O> ? O : Else
export declare type ExtractStoresValues<Store extends Stores, Else extends unknown = unknown> = Store extends (Readable<infer Val>) ? Val : {
	[Key in keyof Store]:(Store[Key] extends (Readable<infer O>) ? O : Extract<Store[Key], Readable<unknown>> extends Readable<infer O> ? O : Else)
}
export declare type Invalidator<Val extends unknown = unknown> = (value?:Val)=>void
export declare type readable_infer_T<Store extends Readable<unknown> = Readable<unknown>> = Store extends Readable<infer Val> ? Val : never
export declare type readable_stores_T<Val extends unknown = unknown> = Readable<Val>|Readable<Val>[]
export declare type readable_stores_val_T<Store extends readable_stores_T<unknown>> = Store extends Readable<infer N0_Val>[] ? N0_Val : Store extends Readable<infer N1_Val> ? N1_Val : never
export declare type Readable_subscribe_T<T extends unknown = unknown> = (this:void, run:Subscriber<T>, invalidate?:Invalidator<T>)=>Unsubscriber
export declare type StartStopNotifier<Val extends unknown = unknown> = (set:Subscriber<Val>)=>Unsubscriber|void
export declare type Stores<Val extends unknown = unknown> = Readable<Val>|[Readable<Val>, ...Array<Readable<Val>>]
export declare type stores_infer_T<Store extends Stores<unknown>> = Store extends (infer Val) ? Val : never
export interface StoreSequence_I {
	step:string
	step_data?:any
	done:boolean
}
export declare type StoresValues<T> = T extends Readable<infer U> ? U : {
	[K in keyof T]:(T[K] extends Readable<infer U> ? U : never)
}
export declare type writable_stores_T<Val extends unknown = unknown> = Writable<Val>|Writable<Val>[]
export declare type writable_stores_val_T<Store extends writable_stores_T<unknown>> = Store extends Writable<infer O>[] ? O : Store extends Writable<infer O> ? O : never
export declare type WritableOrReadable<Val extends unknown = unknown, Store extends Readable<Val> = Readable<Val>> = Store extends Writable<Val> ? Store : Store extends Readable<Val> ? Store : never
