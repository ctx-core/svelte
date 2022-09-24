import type { Readable } from 'svelte/store'
import type { Stores } from './index'
export declare type ExtractStoresValues<Store extends Stores, Else extends unknown = unknown> = Store extends (Readable<infer Val>) ? Val : {
	[Key in keyof Store]:(Store[Key] extends (Readable<infer O>) ? O : Extract<Store[Key], Readable<unknown>> extends Readable<infer O> ? O : Else)
}
