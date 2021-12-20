import type { Readable } from 'svelte/store'
export type Stores<Val extends unknown = unknown> =
	Readable<Val>|[Readable<Val>, ...Array<Readable<Val>>];
