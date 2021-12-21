import { getContext, setContext } from 'svelte'
export function llContext<Val>(key:string, val_:()=>Val):Val {
	let val = getContext<Val>(key)
	if (val != null) return val
	val = val_()
	setContext(key, val)
	return val
}
export const _llContext_store_ctx = ()=>
	llContext('store_ctx', ()=>({}))
export {
	_llContext_store_ctx as _store_ctx__llContext
}
