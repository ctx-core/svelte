import { be_, ctx__new, type Ctx_wide_T, ns_ctx__new } from '@ctx-core/object'
import type { Equal, Expect } from 'ctx-core/test'
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
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base$_(ctx)
		}, base=>base + 1)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
})
test('be_readable_pair_|+id|+ns', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		base$_,
		,
		base__set,
	] = be_writable_triple_(()=>1, {
		ns: 'test_ns'
	})
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base$_(ctx)
		},
		base=>base + 1,
		{ id: 'foobar', ns: 'test_ns' })
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar') as Readable_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar') as Readable_<number>).$, 3)
})
test('be_readable_pair_|be', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		base$_,
		,
		base__set,
	] = be_writable_triple_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	}, { ns: 'test_ns' })
	const [
		foobar$_,
		foobar_,
	] = be_readable_pair_(be_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		const foobar$ = derived_(base$_(ctx), base=>base + 1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, { id: 'foobar', ns: 'test_ns' }))
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar') as Readable_<number>).$, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar') as Readable_<number>).$, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = Readable_<number>&{
	custom:string
}
