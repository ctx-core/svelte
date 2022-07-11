import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { type Readable_, readable_ } from '../index.js'
test('readable_', ()=>{
	const readable = readable_('foobar')
	equal(readable.$, 'foobar')
})
test('readable_|assign', ()=>{
	const letter_ = readable_('foobar') as Foobar
	letter_.foobar = 'baz'
	equal(letter_.foobar, 'baz')
})
test.run()
interface Foobar extends Readable_<string> {
	foobar:string
}
