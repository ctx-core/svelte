import { getContext, setContext } from 'svelte'
export function llContext(key, _val: () => any) {
	let val = getContext(key)
	if (val != null) return val
	val = _val()
	setContext(key, val)
	return val
}
export const _store_ctx__llContext = ()=>
	llContext('store_ctx', ()=>({}))
