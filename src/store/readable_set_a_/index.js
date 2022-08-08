import { readable_ } from '../readable_/index.js'
import { get } from '../get/index.js'
export function readable_set_a_(initial, readable_fn = readable_) {
	let set = undefined
	const store = readable_fn(initial, (in_set)=>{
		set = in_set
	})
	get(store)
	return [
		store,
		set
	]
}
export { readable_set_a_ as _readable_set_a1, }