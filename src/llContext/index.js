import { getContext, setContext } from 'svelte'
export function llContext(key, val_) {
	let val = getContext(key)
	if (val != null) return val
	val = val_()
	setContext(key, val)
	return val
}
export const _llContext_store_ctx = ()=>llContext('store_ctx', ()=>({}))
export { _llContext_store_ctx as _store_ctx__llContext }
