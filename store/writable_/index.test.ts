import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { writable_ } from '../index.js'
test('writable_fn_', ()=>{
	const writable = writable_('foobar')
	equal(writable.$, 'foobar')
	writable.$ = 'baz'
	equal(writable.$, 'baz')
})
test.run()
