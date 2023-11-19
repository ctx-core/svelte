import { be_, ctx__new, type MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_readable_pair_, be_writable_triple_, derived_, Readable_, writable_ } from '../index.js'
test('be_readable_pair_', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		base$_,
		base_,
		base__set,
	] = be_writable_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(ctx=>
		derived_(base$_(ctx), base=>
			base + 1) as Readable_<number>&{custom:string})
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_readable_pair_|+id__set|+is_source__def|+oninit__def', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		base$_,
		base_,
		base__set,
	] = be_writable_triple_(()=>1).config(base$=>
		base$.is_source__def(map_ctx=>map_ctx === ctx))
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(ctx=>
		derived_(base$_(ctx), base=>
			base + 1) as Readable_<number>&{custom:string})
		.config(foobar$=>foobar$
			.is_source__def(map_ctx=>map_ctx === ctx))
		.oninit__def(foobar$=>foobar$.custom = 'custom-val')
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
