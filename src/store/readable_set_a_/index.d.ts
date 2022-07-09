import type { Readable, readable, Subscriber } from 'svelte/store'
export declare function readable_set_a_<Val extends unknown = unknown>(initial:Val, readable_fn?:typeof readable):readable_set_a__T<Val>;
export declare type readable_set_a__set_T<Val extends unknown = unknown> = Subscriber<Val>;
export declare type readable_set_a__T<Val extends unknown = unknown> = [Readable<Val>, readable_set_a__set_T<Val>];
export { readable_set_a_ as _readable_set_a1, }
