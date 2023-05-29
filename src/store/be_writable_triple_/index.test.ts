import { ctx_, type MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { writable_, be_writable_triple_ } from '../index.js'
test('be_writable_triple_|+base_name|+writable__new|+be__params', ()=>{
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_(
		'foobar',
		()=>writable_(1),
		{ is_source_ }
	)
	equal(foobar__([ctx_(), ctx]).$, 1)
	equal(foobar_([ctx_(), ctx]), 1)
	foobar__set([ctx_(), ctx], 2)
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
})
test('be_writable_triple_|+base_name|+writable__new|-be__params', ()=>{
	const ctx = ctx_()
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_(
		'foobar',
		()=>writable_(1),
	)
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_writable_triple_|+base_name|-writable__new|+be__params', ()=>{
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_('foobar', { is_source_ })
	equal(foobar__([ctx_(), ctx]).$, undefined)
	equal(foobar_([ctx_(), ctx]), undefined)
	foobar__set([ctx_(), ctx], 2)
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
})
test('be_writable_triple_|+base_name|-writable__new|-be__params', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_('foobar')
	const ctx = ctx_()
	equal(foobar__(ctx).$, undefined)
	equal(foobar_(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_writable_triple_|-base_name|+writable__new|+be__params', ()=>{
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_(
		undefined,
		()=>writable_(1),
		{ is_source_ })
	equal(foobar__([ctx_(), ctx]).$, 1)
	equal(foobar_([ctx_(), ctx]), 1)
	foobar__set([ctx_(), ctx], 2)
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
})
test('be_writable_triple_|-base_name|+writable__new|-be__params', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_(undefined, ()=>writable_(1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_writable_triple_|-base_name|-writable__new|+be__params', ()=>{
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_({ is_source_})
	equal(foobar__([ctx_(), ctx]).$, undefined)
	equal(foobar_([ctx_(), ctx]), undefined)
	foobar__set([ctx_(), ctx], 2)
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
})
test('be_writable_triple_|-base_name|-writable__new|-be__params', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_()
	const ctx = ctx_()
	equal(foobar__(ctx).$, undefined)
	equal(foobar_(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test.run()
