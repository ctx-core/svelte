import { be_, ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_readable_pair_, be_writable_triple_, derived_, type Readable_ } from '../index.js'
test('be_readable_pair_', ()=>{
	const ctx = ctx__new()
	const [
		base$_,
		,
		base__set,
	] = be_writable_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(
		ctx=>base$_(ctx),
		base=>base + 1)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_readable_pair_|+id|+is_source_', ()=>{
	const ctx = ctx__new()
	const [
		base$_,
		,
		base__set,
	] = be_writable_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(
		ctx=>base$_(ctx),
		base=>base + 1, {
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx
		})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as Readable_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as Readable_<number>).$, 3)
})
test('be_readable_pair_|be', ()=>{
	const ctx = ctx__new()
	const [
		base$_,
		,
		base__set,
	] = be_writable_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(be_(ctx=>{
		const foobar$ = derived_(base$_(ctx), base=>base + 1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx
	}))
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as Readable_<number>).$, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as Readable_<number>).$, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = Readable_<number>&{custom:string}
