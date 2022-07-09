import type { ExtractReadableValue } from '../_types'
import type { Readable } from '../readable'
export declare function subscribe_wait_timeout<Store extends Readable<unknown>>(store:Store, condition_fn:((val:ExtractReadableValue<Store>)=>any)|undefined, timeout:number):Promise<ExtractReadableValue<Store, unknown>>;
export { subscribe_wait_timeout as subscribe_wait_for_timeout }
