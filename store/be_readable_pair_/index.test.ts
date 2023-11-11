import { be_, ctx__new, type MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_readable_pair_, derived_, writable_ } from '../index.js'
test('be_readable_pair_|+base_name|+derived__new|+be__params', ()=>{
	const base_ = writable_(1)
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar__,
		foobar_,
	] = be_readable_pair_(
		'foobar',
		()=>
			derived_(base_, base=>
				base + 1),
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar__([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	base_.$ = 2
	equal(foobar__([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
})
test('be_readable_pair_|+base_name|+derived__new|-be__params', ()=>{
	const base_ = writable_(1)
	const [
		foobar__,
		foobar_,
	] = be_readable_pair_(
		'foobar',
		()=>
			derived_(base_, base=>
				base + 1))
	const ctx = ctx__new()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_readable_pair_|-base_name|+derived__new|+be__params', ()=>{
	const base_ = writable_(1)
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar__,
		foobar_,
	] = be_readable_pair_(
		()=>
			derived_(base_,
				base=>base + 1),
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar__([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	base_.$ = 2
	equal(foobar__([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
})
test('be_readable_pair_|-base_name|+derived__new|-be__params', ()=>{
	const base_ = writable_(1)
	const [
		foobar__,
		foobar_,
	] = be_readable_pair_(
		()=>
			derived_(base_,
				base=>base + 1))
	const ctx = ctx__new()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test.run()
