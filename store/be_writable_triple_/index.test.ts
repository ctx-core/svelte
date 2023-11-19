import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_writable_triple_, type Writable_ } from '../index.js'
test('be_writable_triple_', ()=>{
	const ctx = ctx__new()
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_(()=>1)
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_writable_triple_|+id__set|+is_source__def|+oninit__def', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_writable_triple_<number, Writable_<number>&{
		custom:string
	}>(()=>1)
		.config(foobar$=>foobar$
			.id__set('foobar')
			.is_source__def(map_ctx=>map_ctx === ctx))
		.oninit__def(foobar$=>foobar$.custom = 'custom-val')
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal((ctx.get('foobar') as Writable_<number>).$, 1)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as Writable_<number>).$, 2)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
})
test.run()
