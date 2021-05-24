import { getContext, setContext } from 'svelte';
export function llContext(key, _val) {
    let val = getContext(key);
    if (val != null)
        return val;
    val = _val();
    setContext(key, val);
    return val;
}
export const _llContext_store_ctx = () => llContext('store_ctx', () => ({}));
export { _llContext_store_ctx as _store_ctx__llContext };
