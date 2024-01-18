import { be_, ctx__new, type Ctx_wide_T, ns_ctx_, ns_ctx__new } from 'ctx-core/be'
import type { Equal, Expect } from 'ctx-core/test'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_writable_triple_, writable_, type Writable_ } from '../index.js'
test('be_writable_triple_', ()=>{
	const ctx = ctx__new()
	const [
		foobar__,
		foobar_,
		foobar__set,
	] = be_writable_triple_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	})
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
})
test('be_writable_triple_|+id|+ns', ()=>{
	const ctx = ns_ctx_('test_ns')
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_writable_triple_<number, 'test_ns'>(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	}, { id: 'foobar', ns: 'test_ns' })
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal((ctx.s.test_ns.get('foobar')![0] as Writable_<number>).$, 1)
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as Writable_<number>).$, 2)
})
test('be_writable_triple_|be', ()=>{
	const ctx = ns_ctx_('test_ns')
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_writable_triple_<number, 'test_ns', custom_T>(be_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		const foobar$ = writable_(1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, { id: 'foobar', ns: 'test_ns' }))
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal((ctx.s.test_ns.get('foobar')![0] as Writable_<number>).$, 1)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as Writable_<number>).$, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = Writable_<number>&{
	custom:string
}
