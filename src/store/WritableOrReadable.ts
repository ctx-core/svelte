import type { Readable } from './readable.js'
import type { Writable } from './writable.js'
export type WritableOrReadable<Val extends unknown = unknown, Store extends Readable<Val> = Readable<Val>> =
	Store extends Writable<Val>
    ? Store
    : Store extends Readable<Val>
    ? Store
    : never
