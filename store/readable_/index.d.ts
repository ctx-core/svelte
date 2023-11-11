import type { StartStopNotifier } from '../_types/index.js'
import type { Readable } from '../readable/index.js'
export declare function readable_<
	Val extends unknown = unknown
>(
	value:Val,
	start?:StartStopNotifier<Val>
):Readable_<Val>
export declare function mix_readable_<
	Val extends unknown = unknown
>(store:Readable<Val>):Readable_<Val>
export type Readable_<Val extends unknown = unknown> = Readable<Val>&{
	():Val
	(_:Val):void
	readonly $:Val
	readonly _:Val
}
export type Readable$<
	Val extends unknown = unknown
> = Readable_<Val>
export {
	readable_ as readable$,
}
