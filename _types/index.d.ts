export declare type EventDispatcher</*@formatter:off*/
	EventMap extends {} = any,
	EventKey extends Extract<keyof EventMap, string> = Extract<keyof EventMap, string>
>/*@formatter:on*/ = (type:EventKey, detail?:EventMap[EventKey])=>void
