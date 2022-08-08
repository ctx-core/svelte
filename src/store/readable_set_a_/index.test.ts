import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { readable_set_a_ } from '../index.js'
test('readable_set_a', ()=>{
	const [readable, set] = readable_set_a_('foobar')
	equal(readable.$, 'foobar')
	set('baz')
	equal(readable.$, 'baz')
})
test.run()
