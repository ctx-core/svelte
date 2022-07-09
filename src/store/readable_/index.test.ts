import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { readable_ } from '../index.js'
test('readable_', ()=>{
	const readable = readable_('foobar')
	equal(readable.$, 'foobar')
})
test.run()
